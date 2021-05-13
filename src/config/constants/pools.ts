import { PoolConfig, QuoteToken, PoolCategory } from './types'

const pools: PoolConfig[] = [  
  {
    sousId: 0,
    tokenName: 'WMATIC',
    stakingTokenName: QuoteToken.BUSD,
    stakingTokenAddress: '0xC22dA91b0eaa33B88f67F543460E56f789ade50b',
    contractAddress: {
      97: '0xcf4ea07D7a6B36966d9214A7649bbf9eFbA70037',
      56: '0xcf4ea07D7a6B36966d9214A7649bbf9eFbA70037',
      137: '0xcf4ea07D7a6B36966d9214A7649bbf9eFbA70037',
    },
    poolCategory: PoolCategory.CORE,
    projectLink: 'https://pancakeswap.finance/',
    harvest: true,
    tokenPerBlock: '1',
    sortOrder: 1,
    isFinished: false,
    tokenDecimals: 18,
  },
  // {
  //   sousId: 1,
  //   tokenName: 'TWT',
  //   stakingTokenName: QuoteToken.SYRUP,
  //   stakingTokenAddress: '0x009cF7bC57584b7998236eff51b98A168DceA9B0',
  //   contractAddress: {
  //     97: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //     56: '0xAfd61Dc94f11A70Ae110dC0E0F2061Af5633061A',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   projectLink: 'https://trustwallet.com/',
  //   harvest: true,
  //   tokenPerBlock: '20',
  //   sortOrder: 999,
  //   isFinished: true,
  //   tokenDecimals: 18,
  // },
]

export default pools
