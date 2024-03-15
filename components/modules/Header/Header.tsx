'use client'
import { useLang } from '@/hooks/useLang'
import Logo from '../../elements/Logo/Logo'
import Link from 'next/link'
import Menu from './Menu'
import { $searchModal, openMenu, openSearchModal } from '@/context/modals'
import {
  addOverFlowHiddenToBody,
  handleCloseSearchModal,
} from '@/lib/utils/common'
import { useUnit } from 'effector-react'

const Header = () => {
  const { lang, translations } = useLang()
  const searchModal = useUnit($searchModal)

  const handleOpenMenu = () => {
    addOverFlowHiddenToBody()
    openMenu()
  }

  const handleOpenSearchModal = () => {
    openSearchModal()
    addOverFlowHiddenToBody()
  }

  return (
    <header className='header'>
      <div
        onClick={handleCloseSearchModal}
        className={`header__search-overlay ${searchModal ? 'overlay-active' : ''}`}
      />
      <div className='container header__container'>
        <button className='btn-reset header__burger' onClick={handleOpenMenu}>
          {translations[lang].header.menu_btn}
        </button>
        <Menu />
        <div className='header__logo'>
          <Logo />
        </div>
        <ul className='header__links list-reset'>
          <li className='header__links__item'>
            <button
              onClick={handleOpenSearchModal}
              className='btn-reset header__links__item__btn header__links__item__btn--search'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/favorites'
              className='header__links__item__btn header__links__item__btn--favorites'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/compare'
              className='header__links__item__btn header__links__item__btn--compare'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/cart'
              className='header__links__item__btn header__links__item__btn--cart'
            />
          </li>
          <li className='header__links__item'>
            <Link
              href='/profile'
              className='header__links__item__btn header__links__item__btn--profile'
            />
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
