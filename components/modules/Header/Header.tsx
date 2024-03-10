'use client'
import { useLang } from '@/hooks/useLang'
import Logo from '../../elements/Logo/Logo'
import Link from 'next/link'

const Header = () => {
  const { lang, translations } = useLang()

  return (
    <header className='header'>
      <h2>This is header</h2>
      <div className='container header__container'>
        <button className='btn-reset header__burger'>
          {translations[lang].header.menu_btn}
        </button>
      </div>
      <div className='header__logo'>
        <Logo />
      </div>
      <ul className='header__links list-reset'>
        <li className='header__links__item'>
          <button className='header__links__item__btn header__links__item__btn--search' />
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
    </header>
  )
}

export default Header
