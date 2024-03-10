import Link from 'next/link'

const Logo = () => (
  <Link className='logo' href='/'>
    <img
      className='logo__img'
      src='/img/header-logo.svg'
      alt='Rostelecom logo'
    />
  </Link>
)

export default Logo
