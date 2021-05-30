import React from 'react'
import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'

const Buy = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <iframe src="https://quickswap.exchange/#/swap?outputCurrency=0xC22dA91b0eaa33B88f67F543460E56f789ade50b" title="Buy ORCA" height='700px' width="100%"/>
    </Page>
  )
}

export default Buy
