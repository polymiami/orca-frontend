/* eslint-disable */

import React, { useState } from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { Tabs } from '../components/Tabs'

const TabGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border: none;

  &div > :focus {
    background-color: #354a63;
}
`

const Section = styled.div`
  position: relative;
  width: 100%px;
  margin: 0 auto;
  z-index: 0;
  color: white;

  &:after {
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    background-color: #5E6B7F;
    padding: 40px 0;
  }
`


function Liquidity() {
  return (
    <Page>
      <Section>
        <Tabs>
          <TabGroup>
            <Tabs.Tab label="a">ORCA-WMATIC</Tabs.Tab>
            <Tabs.Tab label="b">ORCA-USDC</Tabs.Tab>
            <Tabs.Tab label="c">ORCA-USDT</Tabs.Tab>
            <Tabs.Tab label="d">ORCA-ZERO</Tabs.Tab>
          </TabGroup>

          <Tabs.Panel label="a">
            <iframe src="https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0xc22da91b0eaa33b88f67f543460e56f789ade50b" title="Buy ORCA" height='600px' width="100%"/>
          </Tabs.Panel>
          <Tabs.Panel label="b">
            <iframe src="https://quickswap.exchange/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0xc22da91b0eaa33b88f67f543460e56f789ade50b" title="Buy ORCA" height='600px' width="100%"/>
          </Tabs.Panel>
          <Tabs.Panel label="c">
            <iframe src="https://quickswap.exchange/#/add/0xc2132d05d31c914a87c6611c10748aeb04b58e8f/0xc22da91b0eaa33b88f67f543460e56f789ade50b" title="Buy ORCA" height='600px' width="100%"/>
          </Tabs.Panel>
          <Tabs.Panel label="d">
            <iframe src="https://quickswap.exchange/#/add/0xb67176655e7919a27aA34C279157124619aDFd4B/0xC22dA91b0eaa33B88f67F543460E56f789ade50b" title="Buy ORCA" height='600px' width="100%"/>
          </Tabs.Panel>
        </Tabs>
      </Section>
    </Page>
  );
}

export default Liquidity
