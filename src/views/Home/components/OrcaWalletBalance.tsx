import React from 'react'
import { Text } from '@orcinuslabs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useI18n from 'hooks/useI18n'
import CardValue from './CardValue'

const OrcaWalletBalance = ({ orcaBalance }) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ lineHeight: '36px' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return <CardValue value={orcaBalance} fontSize="24px" />
}

export default OrcaWalletBalance
