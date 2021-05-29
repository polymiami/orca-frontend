import BigNumber from 'bignumber.js'
import erc20ABI from 'config/abi/erc20.json'
import masterchefABI from 'config/abi/masterchef.json'
import multicall from 'utils/multicall'
import farmsConfig from 'config/constants/farms'
import { getMasterChefAddress } from 'utils/addressHelpers'

const CHAIN_ID = process.env.REACT_APP_CHAIN_ID

export const fetchFarmUserAllowances = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return { address: lpContractAddress, name: 'allowance', params: [account, masterChefAdress] }
  })

  const rawLpAllowances = await multicall(erc20ABI, calls)
  // console.log("fetchFarmsUser multicall1")
  const parsedLpAllowances = rawLpAllowances.map((lpBalance) => {
    return new BigNumber(lpBalance).toJSON()
  })
  return parsedLpAllowances
}

export const fetchFarmUserTokenBalances = async (account: string) => {
  const calls = farmsConfig.map((farm) => {
    const lpContractAddress = farm.isTokenOnly ? farm.tokenAddresses[CHAIN_ID] : farm.lpAddresses[CHAIN_ID]
    return {
      address: lpContractAddress,
      name: 'balanceOf',
      params: [account],
    }
  })

  const rawTokenBalances = await multicall(erc20ABI, calls)
  // console.log("fetchFarmsUser multicall2")
  const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
    return new BigNumber(tokenBalance).toJSON()
  })
  return parsedTokenBalances
}

export const fetchFarmUserStakedBalances = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAdress,
      name: 'userInfo',
      params: [farm.pid, account],
    }
  })

  const rawStakedBalances = await multicall(masterchefABI, calls)
  // console.log("fetchFarmsUser multicall3")
  const parsedStakedBalances = rawStakedBalances.map((stakedBalance) => {
    return new BigNumber(stakedBalance[0]._hex).toJSON()
  })
  return parsedStakedBalances
}

export const fetchFarmUserEarnings = async (account: string) => {
  const masterChefAdress = getMasterChefAddress()

  const calls = farmsConfig.map((farm) => {
    return {
      address: masterChefAdress,
      name: 'pendingOrca',
      params: [farm.pid, account],
    }
  })

  const rawEarnings = await multicall(masterchefABI, calls)
  // console.log("fetchFarmsUser multicall4")
  const parsedEarnings = rawEarnings.map((earnings) => {
    return new BigNumber(earnings).toJSON()
  })
  return parsedEarnings
}
