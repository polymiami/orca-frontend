import React from 'react'
import BigNumber from 'bignumber.js'
import styled from 'styled-components'
import { Modal, Text, LinkExternal, Flex } from '@orcinuslabs/uikit'
import useI18n from 'hooks/useI18n'
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts'
import { calculateOrcaEarnedPerThousandDollars, apyModalRoi } from 'utils/compoundApyHelpers'
import { Address } from 'config/constants/types'

interface ApyCalculatorModalProps {
  onDismiss?: () => void
  lpLabel?: string
  orcaPrice?: BigNumber
  apy?: BigNumber
  quoteTokenAdresses?: Address
  quoteTokenSymbol?: string
  tokenAddresses: Address
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, auto);
  margin-bottom: 24px;
`

const GridItem = styled.div`
  margin-bottom: '10px';
`

const Description = styled(Text)`
  max-width: 320px;
  margin-bottom: 28px;
`

const ApyCalculatorModal: React.FC<ApyCalculatorModalProps> = ({
  onDismiss,
  lpLabel,
  quoteTokenAdresses,
  quoteTokenSymbol,
  tokenAddresses,
  orcaPrice,
  apy,
}) => {
  const TranslateString = useI18n()
  const liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, quoteTokenSymbol, tokenAddresses })
  const farmApy = apy.times(new BigNumber(100)).toNumber()
  const oneThousandDollarsWorthOfOrca = 1000 / orcaPrice.toNumber()

  const orcaEarnedPerThousand1D = calculateOrcaEarnedPerThousandDollars({ numberOfDays: 1, farmApy, orcaPrice })
  const orcaEarnedPerThousand7D = calculateOrcaEarnedPerThousandDollars({ numberOfDays: 7, farmApy, orcaPrice })
  const orcaEarnedPerThousand30D = calculateOrcaEarnedPerThousandDollars({ numberOfDays: 30, farmApy, orcaPrice })
  const orcaEarnedPerThousand365D = calculateOrcaEarnedPerThousandDollars({ numberOfDays: 365, farmApy, orcaPrice })

  return (
    <Modal title="ROI" onDismiss={onDismiss}>
      <Grid>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(999, 'Timeframe')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(999, 'ROI')}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontSize="12px" bold color="textSubtle" textTransform="uppercase" mb="20px">
            {TranslateString(999, 'ORCA per $1000')}
          </Text>
        </GridItem>
        {/* 1 day row */}
        <GridItem>
          <Text>1d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: orcaEarnedPerThousand1D, amountInvested: oneThousandDollarsWorthOfOrca })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{orcaEarnedPerThousand1D}</Text>
        </GridItem>
        {/* 7 day row */}
        <GridItem>
          <Text>7d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: orcaEarnedPerThousand7D, amountInvested: oneThousandDollarsWorthOfOrca })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{orcaEarnedPerThousand7D}</Text>
        </GridItem>
        {/* 30 day row */}
        <GridItem>
          <Text>30d</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: orcaEarnedPerThousand30D, amountInvested: oneThousandDollarsWorthOfOrca })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{orcaEarnedPerThousand30D}</Text>
        </GridItem>
        {/* 365 day / APY row */}
        <GridItem>
          <Text>365d(APY)</Text>
        </GridItem>
        <GridItem>
          <Text>
            {apyModalRoi({ amountEarned: orcaEarnedPerThousand365D, amountInvested: oneThousandDollarsWorthOfOrca })}%
          </Text>
        </GridItem>
        <GridItem>
          <Text>{orcaEarnedPerThousand365D}</Text>
        </GridItem>
      </Grid>
      <Description fontSize="12px" color="textSubtle">
        {TranslateString(
          999,
          'Calculated based on current rates. Compounding once daily. Rates are estimates provided for your convenience only, and by no means represent guaranteed returns.',
        )}
      </Description>
      <Flex justifyContent="center">
        {(lpLabel.includes('-')) ? (
          <LinkExternal href={`https://quickswap.exchange/#/add/${liquidityUrlPathParts}`}>
            {TranslateString(999, 'Get')} {lpLabel}
          </LinkExternal>
        ) : (
          <LinkExternal href={(lpLabel.includes('SUSHI')) ? `https://app.sushi.com/#/swap/${liquidityUrlPathParts.slice(liquidityUrlPathParts.indexOf("/") + 1)}` : `https://quickswap.exchange/#/swap/${liquidityUrlPathParts.slice(liquidityUrlPathParts.indexOf("/") + 1)}`}>
            {TranslateString(999, 'Get')} {lpLabel}
          </LinkExternal>
        )}
        
      </Flex>
    </Modal>
  )
}

export default ApyCalculatorModal
