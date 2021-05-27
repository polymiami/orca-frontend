export enum QuoteToken {
  'USDT' = 'USDT',
  'USDC' = 'USDC',
  'WETH' = 'WETH',
  'ORCA' = 'ORCA',
  'WMATIC' = 'WMATIC',
  'ZERO' = 'ZERO'
}

export interface Address {
  97?: string
  56: string
  137?: string
}

export interface FarmConfig {
  pid: number
  lpSymbol: string
  lpAddresses: Address
  tokenSymbol: string
  tokenAddresses: Address
  quoteTokenSymbol: QuoteToken
  quoteTokenAdresses: Address
  multiplier?: string
  isTokenOnly?: boolean
  isCommunity?: boolean
  risk: number
  dual?: {
    rewardPerBlock: number
    earnLabel: string
    endBlock: number
  }
}
