'use client'
import { AllowedLangs } from '@/constants/lang'
import { setLang } from '@/context/lang'
import { $menuIsOpen, closeMenu } from '@/context/modals'
import { useLang } from '@/hooks/useLang'
import { removeOverFlowHiddenFromBody } from '@/lib/utils/common'
import { useUnit } from 'effector-react'
import { useState } from 'react'

const Menu = () => {
  const menuIsOpen = useUnit($menuIsOpen)
  const [showCatalogList, setShowCatalogList] = useState(false)
  const [showBuyerList, setShowBuyerList] = useState(false)
  const [showContactsList, setShowContactsList] = useState(false)
  const { lang, translations } = useLang()

  const handleCloseMenu = () => {
    removeOverFlowHiddenFromBody()
    closeMenu()
  }

  const handleSwitchLangs = (lang: string) => {
    setLang(lang as AllowedLangs)
    localStorage.setItem('lang', JSON.stringify(lang))
  }

  const handleSwitchLangToRu = () => handleSwitchLangs('ru')
  const handleSwitchLangToEn = () => handleSwitchLangs('en')

  return (
    <nav className={`nav-menu ${menuIsOpen ? 'open' : 'close'}`}>
      <button
        className={`btn-reset nav-menu__close ${menuIsOpen ? 'open' : ''}`}
        onClick={handleCloseMenu}
      />
      <div className={`nav-menu__lang ${menuIsOpen ? 'open' : ''}`}>
        <button
          className={`btn-reset nav-menu__lang__btn ${
            lang === 'ru' ? 'lang-active' : ''
          }`}
          onClick={handleSwitchLangToRu}
        >
          RU
        </button>
        <button
          className={`btn-reset nav-menu__lang__btn ${
            lang === 'en' ? 'lang-active' : ''
          }`}
          onClick={handleSwitchLangToEn}
        >
          EN
        </button>
      </div>
    </nav>
  )
}

export default Menu
