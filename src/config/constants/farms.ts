import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 4,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'ORCA - WMATIC',
    lpAddresses: {
      97: '',
      56: '0xcf4ea07D7a6B36966d9214A7649bbf9eFbA70037',
      137: '0xcf4ea07D7a6B36966d9214A7649bbf9eFbA70037',
    },
    tokenSymbol: 'ORCA',
    tokenAddresses: {
      97: '',
      56: '0xC22dA91b0eaa33B88f67F543460E56f789ade50b',
      137: '0xC22dA91b0eaa33B88f67F543460E56f789ade50b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'ORCA - USDC',
    lpAddresses: {
      97: '',
      56: '0xBd52c933A90895Fb3262BdF1Be9eA0F59c53B58C',
      137: '0xBd52c933A90895Fb3262BdF1Be9eA0F59c53B58C',
    },
    tokenSymbol: 'ORCA',
    tokenAddresses: {
      97: '',
      56: '0xC22dA91b0eaa33B88f67F543460E56f789ade50b',
      137: '0xC22dA91b0eaa33B88f67F543460E56f789ade50b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'ORCA - USDT',
    lpAddresses: {
      97: '',
      56: '0xeF78356dBCD45Db132fC42Ac976005078841f35e',
      137: '0xeF78356dBCD45Db132fC42Ac976005078841f35e',
    },
    tokenSymbol: 'ORCA',
    tokenAddresses: {
      97: '',
      56: '0xC22dA91b0eaa33B88f67F543460E56f789ade50b',
      137: '0xC22dA91b0eaa33B88f67F543460E56f789ade50b',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  // {
  //   pid: 7,
  //   risk: 3,
  //   isTokenOnly: false,
  //   lpSymbol: 'WMATIC - USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
  //     137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
  //   },
  //   tokenSymbol: 'WMATIC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
  //     137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 9,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ORCA',
    lpAddresses: {
      97: '',
      56: '0xBd52c933A90895Fb3262BdF1Be9eA0F59c53B58C',
      137: '0xBd52c933A90895Fb3262BdF1Be9eA0F59c53B58C', // ORCA
    },
    tokenSymbol: 'ORCA',
    tokenAddresses: {
      97: '',
      56: '0xC22dA91b0eaa33B88f67F543460E56f789ade50b',
      137: '0xC22dA91b0eaa33B88f67F543460E56f789ade50b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'WMATIC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x2cf7252e74036d1da831d11089d326296e64a728',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDC - USDC
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 11,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0x2cf7252e74036d1da831d11089d326296e64a728',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDT - USDC
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WBTC',
    lpAddresses: {
      97: '',
      56: '0xf6a637525402643b0654a54bead2cb9a83c8b498',
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498', // WBTC - USDC
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', // WBTC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WETH',
    lpAddresses: {
      97: '',
      56: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d',
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', // ETH - USDC
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', // ETH
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
