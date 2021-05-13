import React from 'react'
import styled from 'styled-components'
import { Button, Heading, Text, LogoIcon, LinkExternal, Link } from '@pancakeswap-libs/uikit'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const StyledNotFound = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 64px);
  justify-content: center;
`

const StyledLinkExternal = styled(LinkExternal)`
  text-decoration: none;
  font-weight: heavy;
  color: ${({ theme }) => theme.colors.text};
  display: flex;
  align-items: center;

  svg {
    padding-left: 4px;
    height: 18px;
    width: auto;
    fill: ${({ theme }) => theme.colors.primary};
  }
`

const NotFound = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <StyledNotFound>
        <LogoIcon width="64px" mb="8px" />
        {/* <LinkExternal href='https://quickswap.exchange/#/swap?outputCurrency=0xC22dA91b0eaa33B88f67F543460E56f789ade50b'>BUY ORCA!</LinkExternal> */}
        <LinkExternal href='https://quickswap.exchange/#/swap?outputCurrency=0xC22dA91b0eaa33B88f67F543460E56f789ade50b'>BUY ORCA!</LinkExternal>
      </StyledNotFound>
    </Page>
  )
}

export default NotFound
