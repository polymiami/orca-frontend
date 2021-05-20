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
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
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
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
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
  {
    pid: 23,
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
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 24,
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
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 29,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'SUSHI',
    lpAddresses: {
      97: '',
      56: '0xe15e9d2a5af5c1d3524bbc594ddc4a7d80ad27cd',
      137: '0xe15e9d2a5af5c1d3524bbc594ddc4a7d80ad27cd', // SUSHI - USDC
    },
    tokenSymbol: 'SUSHI',
    tokenAddresses: {
      97: '',
      56: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a',
      137: '0x0b3F868E0BE5597D5DB7fEB59E1CADBb0fdDa50a', // SUSHI
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdc,
  },
  // {
  //   pid: 7,
  //   isTokenOnly: true,
  //   risk: 3,
  //   lpSymbol: 'WMATIC',
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
    pid: 25,
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
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 26,
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
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 27,
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
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 28,
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
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 30,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'LINK',
    lpAddresses: {
      97: '',
      56: '0x3c986748414a812e455dcd5418246b8fded5c369',
      137: '0x3c986748414a812e455dcd5418246b8fded5c369', // LINK - WMATIC
    },
    tokenSymbol: 'LINK',
    tokenAddresses: {
      97: '',
      56: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39',
      137: '0x53E0bca35eC356BD5ddDFebbD1Fc0fD03FaBad39', // LINK
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
  },
  {
    pid: 31,
    isTokenOnly: true,
    risk: 3,
    lpSymbol: 'AAVE',
    lpAddresses: {
      97: '',
      56: '0x0554059d42e26f35cc958581c71fdfd92405d02f',
      137: '0x0554059d42e26f35cc958581c71fdfd92405d02f', // AAVE - WMATIC
    },
    tokenSymbol: 'AAVE',
    tokenAddresses: {
      97: '',
      56: '0xd6df932a45c0f255f85145f286ea0b292b21c90b',
      137: '0xd6df932a45c0f255f85145f286ea0b292b21c90b', // AAVE
    },
    quoteTokenSymbol: QuoteToken.WMATIC,
    quoteTokenAdresses: contracts.wmatic,
  },
]

export default farms
