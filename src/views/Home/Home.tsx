import React from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie';
import { Heading, Text, BaseLayout } from '@orcinuslabs/uikit'
import useI18n from 'hooks/useI18n'
import Page from 'components/layout/Page'
import FarmStakingCard from './components/FarmStakingCard'
import rot13 from '../../utils/encode'
import { isAddress } from '../../utils/web3'
import OrcaStats from './components/OrcaStats'
import TotalValueLockedCard from './components/TotalValueLockedCard'
import TwitterCard from './components/TwitterCard'
import EarnAPRCard from './components/EarnAPRCard'
import EarnAssetCard from './components/EarnAssetCard'
import WinCard from './components/WinCard'
import Charts from './components/Chart'
import useTheme from '../../hooks/useTheme'

const Hero = styled.div`
  align-items: center;
  background-image: url('/images/egg/3ba.svg');
  background-repeat: no-repeat;
  background-position: top center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  margin-bottom: 32px;
  padding-top: 116px;
  text-align: center;

  ${({ theme }) => theme.mediaQueries.lg} {
    height: 165px;
    padding-top: 0;
  }
`

const Cards = styled(BaseLayout)`
  align-items: stretch;
  justify-content: stretch;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 6;
    }
  }
`

const CTACards = styled(BaseLayout)`
  align-items: start;
  margin-bottom: 32px;

  & > div {
    grid-column: span 6;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    & > div {
      grid-column: span 8;
    }
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    & > div {
      grid-column: span 4;
    }
  }
`

const HeaderImage = styled.img`
  margin-bottom: 16px;
`

const Home: React.FC = () => {
    const TranslateString = useI18n()
    const cookies = new Cookies();
    const { isDark, toggleTheme } = useTheme()

    return (
        <Page>
            <Hero style={{ marginTop: "25px" }}>
                <h1 
                  style={{  fontFamily: "Codystar, cursive", 
                            fontSize: "96px", 
                            background: isDark ? "-webkit-linear-gradient(#79618e, #354a63)" : "-webkit-linear-gradient(#233142, #79618e)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            paddingTop: "25px", 
                            paddingBottom: "25px" }}
                >
                  OrcaFi
                </h1>
                <Text>by</Text>
                {isDark === true ? (
                  <HeaderImage src="/images/egg/LogoFullTextNewDark.png" alt="Orcinus Labs logo" width={280} height={280} />
                ) : (
                  <HeaderImage src="/images/egg/LogoFullTextNewWhite.png" alt="Orcinus Labs logo" width={280} height={280} />
                )}
            </Hero>
            <div style={{ marginTop: "50px" }}>
                <Cards>
                    <FarmStakingCard />         {/* Farms & Staking */}
                    <Charts />
                </Cards>
                <CTACards>
                    <EarnAPRCard />             {/* Earn up to xx% */}
                    <EarnAssetCard />           {/* Stake $ORCA in Pools */}
                    <TotalValueLockedCard />    {/* Total value locked */}
                    {/* <WinCard />                 Buy $ORCA */}
                </CTACards>
                <Cards>
                    <OrcaStats />               {/* $ORCA statistics */}
                    <TwitterCard />             {/* Annoucements */}
                </Cards>
            </div>
        </Page>
    )
}

export default Home
