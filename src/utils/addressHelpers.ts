import addresses from 'config/constants/contracts'

const chainId = process.env.REACT_APP_CHAIN_ID

export const getOrcaAddress = () => {
  return addresses.orca[chainId]
}
export const getWmaticAddress = () => {
  return addresses.wmatic[chainId]
}
export const getMasterChefAddress = () => {
  return addresses.masterChef[chainId]
}
export const getMulticallAddress = () => {
  return addresses.mulltiCall[chainId]
}
