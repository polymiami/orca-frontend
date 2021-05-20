import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getBalanceNumber } from 'utils/formatBalance'
import { useTotalSupply, useBurnedBalance } from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getOrcaAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useFarms, usePriceOrcaUsdc } from '../../../state/hooks'

const StyledOrcaStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const OrcaStats = () => {
  const TranslateString = useI18n()
  const totalSupply = useTotalSupply()
  const burnedBalance = useBurnedBalance(getOrcaAddress())
  const farms = useFarms();
  const orcaPrice = usePriceOrcaUsdc();
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const orcaSupply = getBalanceNumber(circSupply);
  const marketCap = orcaPrice.times(circSupply);

  let orcaPerBlock = 0;
  if(farms && farms[0] && farms[0].orcaPerBlock){
    orcaPerBlock = new BigNumber(farms[0].orcaPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledOrcaStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          {TranslateString(534, 'Statistics')}
        </Heading>
        <Row>
          <Text fontSize="14px">{TranslateString(999, 'Market Capitalization')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <br />
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total ORCA Supply')}</Text>
          {orcaSupply && <CardValue fontSize="14px" value={orcaSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">Maximum Supply</Text>
          <Text bold fontSize="14px">3,300,000</Text>
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total ORCA Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <br />
        <Row>
          <Text fontSize="14px">{TranslateString(540, 'New ORCA/block')}</Text>
          <Text bold fontSize="14px">{orcaPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledOrcaStats>
  )
}

export default OrcaStats
