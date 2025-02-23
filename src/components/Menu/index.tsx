import React, { useContext } from 'react'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { allLanguages } from 'config/localisation/languageCodes'
import { LanguageContext } from 'contexts/Localisation/languageContext'
import useTheme from 'hooks/useTheme'
import { usePriceOrcaUsdc } from 'state/hooks'
import { Menu as UikitMenu } from '@orcinuslabs/uikit'
import config from './config'

const Menu = (props) => {
  const { account, connect, reset } = useWallet()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const orcaPriceUsd = usePriceOrcaUsdc()

  return (
    <UikitMenu
      account={account}
      login={connect}
      logout={reset}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage && selectedLanguage.code}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      cakePriceUsd={orcaPriceUsd}
      links={config}
      priceLink="https://explorer-mainnet.maticvigil.com/tokens/0xC22dA91b0eaa33B88f67F543460E56f789ade50b/"
      {...props}
    />
  )
}

export default Menu
