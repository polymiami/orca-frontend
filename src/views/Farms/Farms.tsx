import React, { useEffect, useCallback, useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import { Image, Heading } from '@pancakeswap-libs/uikit'
import { BLOCKS_PER_YEAR, ORCA_PER_BLOCK, ORCA_POOL_PID } from 'config'
import FlexLayout from 'components/layout/Flex'
import Page from 'components/layout/Page'
import { useFarms, usePriceMaticUsdc, usePriceOrcaUsdc } from 'state/hooks'
import useRefresh from 'hooks/useRefresh'
import { fetchFarmUserDataAsync } from 'state/actions'
import { QuoteToken } from 'config/constants/types'
import useI18n from 'hooks/useI18n'
import FarmCard, { FarmWithStakedValue } from './components/FarmCard/FarmCard'
import FarmTabButtons from './components/FarmTabButtons'
import Divider from './components/Divider'

export interface FarmsProps{
  tokenMode?: boolean
}

const Farms: React.FC<FarmsProps> = (farmsProps) => {
  const { path } = useRouteMatch()
  const TranslateString = useI18n()
  const farmsLP = useFarms()
  const orcaPrice = usePriceOrcaUsdc()          // ORCA-USDT PRICE
  const maticPrice = usePriceMaticUsdc()        // MATIC-USDT PRICE
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const {tokenMode} = farmsProps;

  const dispatch = useDispatch()
  const { fastRefresh } = useRefresh()
  useEffect(() => { 
    if (account) {
      dispatch(fetchFarmUserDataAsync(account))
    }
  }, [account, dispatch, fastRefresh])

  const [stakedOnly, setStakedOnly] = useState(false)

  const activeFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier !== '0X' && farm.pid !== 8)
  const inactiveFarms = farmsLP.filter((farm) => !!farm.isTokenOnly === !!tokenMode && farm.multiplier === '0X' && farm.pid !== 8)

  const stakedOnlyFarms = activeFarms.filter(
    (farm) => farm.userData && new BigNumber(farm.userData.stakedBalance).isGreaterThan(0),
  )

  // /!\ This function will be removed soon
  // This function compute the APY for each farm and will be replaced when we have a reliable API
  // to retrieve assets prices against USD
  const farmsList = useCallback(
    (farmsToDisplay, removed: boolean) => {
      const farmsToDisplayWithAPY: FarmWithStakedValue[] = farmsToDisplay.map((farm) => {
        const orcaRewardPerBlock = new BigNumber(farm.orcaPerBlock || 1)
            .times(new BigNumber(farm.poolWeight))
            .div(new BigNumber(10)
            .pow(18))
        const orcaRewardPerYear = orcaRewardPerBlock.times(BLOCKS_PER_YEAR)

        let apy = orcaPrice.times(orcaRewardPerYear);

        let totalValue = new BigNumber(farm.lpTotalInQuoteToken || 0);

        if (farm.quoteTokenSymbol === QuoteToken.WMATIC) {
          totalValue = totalValue.times(maticPrice);
        } else if (farm.quoteTokenSymbol === QuoteToken.ORCA) {
          totalValue = totalValue.times(orcaPrice);
        } else if (farm.quoteTokenSymbol === QuoteToken.ZERO) {
          const valueInOrca = totalValue.times(orcaPrice);
          const valueInUdsc = valueInOrca.times(orcaPrice);
          totalValue = valueInUdsc.times(new BigNumber(0.5)).dividedBy((new BigNumber(10)).pow(10))
        }

        if(totalValue.comparedTo(0) > 0){
          apy = apy.div(totalValue);
        }

        return { ...farm, apy }
      })
      return farmsToDisplayWithAPY.map((farm) => (
        <FarmCard
          key={farm.pid}
          farm={farm}
          removed={removed}
          maticPrice={maticPrice}
          orcaPrice={orcaPrice}
          ethereum={ethereum}
          account={account}
        />
      ))
    },
    [maticPrice, account, orcaPrice, ethereum],
  )

  return (
    <Page>
      <h1 
        style={{  fontFamily: "Codystar, cursive", 
                  fontSize: "96px", 
                  background: "-webkit-linear-gradient(#233142, #79618e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  paddingTop: "25px", 
                  paddingBottom: "25px",
                  textAlign: 'center' }}
      >
        {tokenMode ? 'POOLS' : 'FARMS'}
      </h1>
      <Heading as="h1" size="md" color="primary" mb="50px" style={{ fontFamily: "Codystar, cursive", textAlign: 'center' }}>
        {
          tokenMode ?
            'Stake tokens to earn $ORCA'
            :
          'Stake LP tokens to earn $ORCA'
        }
      </Heading>
      <Heading as="h2" size="md" color="secondary" mb="50px" style={{ fontFamily: "Codystar, cursive", textAlign: 'center' }}>
        Deposit Fees: 50% buyback and donate, 50% allocated to treasury wallet
      </Heading>
      <FarmTabButtons stakedOnly={stakedOnly} setStakedOnly={setStakedOnly}/>
      <div>
        <Divider />
        <FlexLayout>
          <Route exact path={`${path}`}>
         
            {/* <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
              COMING SOON...
            </Heading> */}
            {stakedOnly ? farmsList(stakedOnlyFarms, false) : farmsList(activeFarms, false)}
          </Route>
          <Route exact path={`${path}/history`}>
            {/* <Heading as="h2" color="secondary" mb="50px" style={{ textAlign: 'center' }}>
              COMING SOON...
            </Heading> */}
            {farmsList(inactiveFarms, true)}
          </Route>
        </FlexLayout>
      </div>
    </Page>
  )
}

export default Farms
