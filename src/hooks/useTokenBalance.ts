import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { provider } from 'web3-core'
import orcaABI from 'config/abi/orca.json'
import { getContract } from 'utils/web3'
import { getTokenBalance } from 'utils/erc20'
import { getOrcaAddress } from 'utils/addressHelpers'
import useRefresh from './useRefresh'

const useTokenBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const { account, ethereum }: { account: string; ethereum: provider } = useWallet()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const res = await getTokenBalance(ethereum, tokenAddress, account)
      setBalance(new BigNumber(res))
    }

    if (account && ethereum) {
      fetchBalance()
    }
  }, [account, ethereum, tokenAddress, fastRefresh])

  return balance
}

export const useTotalSupply = () => {
  const { slowRefresh } = useRefresh()
  const [totalSupply, setTotalSupply] = useState<BigNumber>()

  useEffect(() => {
    async function fetchTotalSupply() {
      const orcaContract = getContract(orcaABI, getOrcaAddress())
      const supply = await orcaContract.methods.totalSupply().call()
      setTotalSupply(new BigNumber(supply))
    }

    fetchTotalSupply()
  }, [slowRefresh])

  return totalSupply
}

export const useBurnedBalance = (tokenAddress: string) => {
  const [balance, setBalance] = useState(new BigNumber(0))
  const balanceMaticLp= new BigNumber(118054756000000000000000)
  const balanceUsdcLp= new BigNumber(100000000000000000000000)
  const balanceUsdtLp= new BigNumber(100000000000000000000000)
  const { slowRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      const orcaContract = getContract(orcaABI, getOrcaAddress())
      const balBurn = await orcaContract.methods.balanceOf('0x0000000000000000000000000000000000000000').call()       // burn address
      setBalance(new BigNumber(balBurn))
    }

    fetchBalance()
  }, [tokenAddress, slowRefresh])
  
  // return balance
  return balance.plus(balanceMaticLp).plus(balanceUsdcLp).plus(balanceUsdtLp)
}

export default useTokenBalance
