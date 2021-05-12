import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'ORCA - USDC',
    lpAddresses: {
      97: '',
      56: '0x2a45b3109af6e47c3ffb1c3111f3e4c17a99158f',
      137: '0x2a45b3109af6e47c3ffb1c3111f3e4c17a99158f',
    },
    tokenSymbol: 'ORCA',
    tokenAddresses: {
      97: '',
      56: '0x289B00930ab1C308f113c52F18e3B15036fB8BA8',
      137: '0x289B00930ab1C308f113c52F18e3B15036fB8BA8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'ORCA - MATIC',
    lpAddresses: {
      97: '',
      56: '0x542Bf9D37A9D0EA0b54428e1aEFC301B2970DA5c',
      137: '0x542Bf9D37A9D0EA0b54428e1aEFC301B2970DA5c',
    },
    tokenSymbol: 'ORCA',
    tokenAddresses: {
      97: '',
      56: '0x289B00930ab1C308f113c52F18e3B15036fB8BA8',
      137: '0x289B00930ab1C308f113c52F18e3B15036fB8BA8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
    risk: 5,
    isTokenOnly: false,
    lpSymbol: 'ORCA - USDT',
    lpAddresses: {
      97: '',
      56: '0x7a2642EDE1851649aa89dBaEbC8eF21044450288',
      137: '0x7a2642EDE1851649aa89dBaEbC8eF21044450288',
    },
    tokenSymbol: 'ORCA',
    tokenAddresses: {
      97: '',
      56: '0x289B00930ab1C308f113c52F18e3B15036fB8BA8',
      137: '0x289B00930ab1C308f113c52F18e3B15036fB8BA8',
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  // {
  //   pid: 13,
  //   risk: 5,
  //   isTokenOnly: false,
  //   lpSymbol: 'WETH - USDC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d',
  //   },
  //   tokenSymbol: 'WETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //     137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  {
    pid: 1,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'WMATIC - USDC',
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
    pid: 2,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'ORCA',
    lpAddresses: {
      97: '',
      56: '0x029D33c1F35d4a01c30dCa336AebcCa83f5a1Db3',
      137: '0x029D33c1F35d4a01c30dCa336AebcCa83f5a1Db3', // ORCA
    },
    tokenSymbol: 'ORCA',
    tokenAddresses: {
      97: '',
      56: '0x289B00930ab1C308f113c52F18e3B15036fB8BA8',
      137: '0x289B00930ab1C308f113c52F18e3B15036fB8BA8',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WMATIC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827', // WMATIC - USDC
    },
    tokenSymbol: 'MATIC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 4,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WBTC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0xf6a637525402643b0654a54bead2cb9a83c8b498', // WBTC - USDC
    },
    tokenSymbol: 'WBTC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', // WBTC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 5,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'WETH',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x853ee4b2a13f8a742d64c8f088be7ba2131f670d', // ETH - USDC
    },
    tokenSymbol: 'WETH',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', // ETH
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 7,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'USDC',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDC - USDC
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 9,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0x6e7a5fafcec6bb1e78bae2a1f0b612012bf14827',
      137: '0x2cf7252e74036d1da831d11089d326296e64a728', // USDT - USDC
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270',
      137: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
