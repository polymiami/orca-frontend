import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Buy ORCA',
    icon: 'TradeIcon',
    href: 'https://quickswap.exchange/#/swap?outputCurrency=0x289B00930ab1C308f113c52F18e3B15036fB8BA8'
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: '$ORCA Chart',
        href: 'https://info.quickswap.exchange/token/0x289B00930ab1C308f113c52F18e3B15036fB8BA8',
      },
      {
        label: 'Polygon Explorer',
        href: 'https://explorer-mainnet.maticvigil.com/tokens/0x289B00930ab1C308f113c52F18e3B15036fB8BA8',
      },
      // {
      //   label: 'Dapp Radar',
      //   href: 'https://dappradar.com/polygon/defi/orcinus-labs'
      // },
      // {
      //   label: 'Dapp.com',
      //   href: 'https://www.dapp.com/app/orcinus-labs'
      // }
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: "Github",
        href: "https://github.com/orcinuslabs",
      },
      {
        label: "Docs",
        href: "https://docs.orcinuslabs.ca/",
      },
    ],
  },
  {
    label: 'Roadmap',
    icon: 'RoadmapIcon',
    href: 'https://docs.orcinuslabs.ca/roadmap',
  },
]

export default config
