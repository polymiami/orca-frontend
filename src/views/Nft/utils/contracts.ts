import { AbiItem } from 'web3-utils'
import { getContract } from 'utils/web3'
import { ContractOptions } from 'web3-eth-contract'
import nftmintingfarm from 'config/abi/nftmintingfarm.json'
import nft from 'config/abi/nft.json'
import { NFT_MINTING_FARM_ADDRESS, NFT_ADDRESS } from 'config/constants/nfts'

// TODO: Figure out how to add current account to contracts to write methods can be used

export const getNFTMintingContract = (contractOptions?: ContractOptions) => {
  const nftMintingFarmAbi = (nftmintingfarm as unknown) as AbiItem
  return getContract(nftMintingFarmAbi, NFT_MINTING_FARM_ADDRESS, contractOptions)
}

export const getNFTContract = (contractOptions?: ContractOptions) => {
  const nftAbi = (nft as unknown) as AbiItem
  return getContract(nftAbi, NFT_ADDRESS, contractOptions)
}

export default getNFTMintingContract
