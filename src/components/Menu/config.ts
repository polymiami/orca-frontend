import { MenuEntry } from '@orcinuslabs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy',
        href: '/buy',
      },
      {
        label: 'Liquidity',
        href: '/liquidity',
      }
    ],
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
        href: 'https://quickchart.app/token/0xC22dA91b0eaa33B88f67F543460E56f789ade50b',
      },
      {
        label: 'Polygon Explorer',
        href: 'https://explorer-mainnet.maticvigil.com/tokens/0xC22dA91b0eaa33B88f67F543460E56f789ade50b',
      },
      {
        label: 'Dapp Radar',
        href: 'https://dappradar.com/polygon/social/orcinus-labs'
      },
      {
        label: 'Dapp.com',
        href: 'https://www.dapp.com/app/orcinus-labs'
      }
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
