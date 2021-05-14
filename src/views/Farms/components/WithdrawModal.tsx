import BigNumber from 'bignumber.js'
import React, { useCallback, useMemo, useState } from 'react'
import { Button, Modal } from '@pancakeswap-libs/uikit'
import ModalActions from 'components/ModalActions'
import TokenInput from 'components/TokenInput'
import useI18n from 'hooks/useI18n'
import { getFullDisplayBalance } from 'utils/formatBalance'

interface WithdrawModalProps {
  max: BigNumber
  onConfirm: (amount: string) => void
  onDismiss?: () => void
  tokenName?: string
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ onConfirm, onDismiss, max, tokenName = '' }) => {
  const [val, setVal] = useState('')
  const [pendingTx, setPendingTx] = useState(false)
  const TranslateString = useI18n()
  // Use 6 decimals when dealing with tokens denominated in USD
  // const numDecimals = (tokenName === 'USDT' || tokenName === 'USDC') ? 6 : 18;
  // const numDecimals = (tokenName === 'USDT' || tokenName === 'USDC') ? 6 : (tokenName === 'WBTC') ? 8 : 18;
  let numDecimals = 18;
  if (tokenName === 'USDT' || tokenName === 'USDC') {
    numDecimals = 6;
  } 
  // else if (tokenName === 'WBTC') {
  //   numDecimals = 8;
  // }
  const fullBalance = useMemo(() => {
    return getFullDisplayBalance(max, numDecimals)
  }, [max, numDecimals])

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>) => {
      setVal(e.currentTarget.value)
    },
    [setVal],
  )

  const handleSelectMax = useCallback(() => {
    setVal(fullBalance)
  }, [fullBalance, setVal])

  // hacky but need to normalize this value before submitting
  const handleSubmissionParsing = () => {
    if (tokenName === 'USDT' || tokenName === 'USDC') {
      return (new BigNumber(parseInt(val)).div(1000000000000)).toString()
    } 
    
    // if (tokenName === 'WBTC') {
    //   return (new BigNumber(parseInt(val)).div(10000000000)).toString()
    // }  

    return val
  }

  return (
    <Modal title={`Withdraw ${tokenName}`} onDismiss={onDismiss}>
      <TokenInput
        onSelectMax={handleSelectMax}
        onChange={handleChange}
        value={val}
        max={fullBalance}
        symbol={tokenName}
      />
      <ModalActions>
        <Button variant="secondary" onClick={onDismiss}>
          {TranslateString(462, 'Cancel')}
        </Button>
        <Button
          disabled={pendingTx}
          onClick={async () => {
            setPendingTx(true)
            await onConfirm(handleSubmissionParsing())
            setPendingTx(false)
            onDismiss()
          }}
        >
          {pendingTx ? TranslateString(488, 'Pending Confirmation') : TranslateString(464, 'Confirm')}
        </Button>
      </ModalActions>
    </Modal>
  )
}

export default WithdrawModal
