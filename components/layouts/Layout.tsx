'use client'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import Header from '../modules/Header/Header'
import MobileNavbar from '../modules/MobileNavbar/MobileNavbar'
import { useUnit } from 'effector-react'
import { $searchModal } from '@/context/modals'
import { motion } from 'framer-motion'
import SearchModal from '../modules/Header/SearchModal'
import { handleCloseSearchModal } from '@/lib/utils/common'
import Footer from '../modules/Footer/Footer'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const isMedia800 = useMediaQuery(800)
  const searchModal = useUnit($searchModal)

  return (
    <>
      <Header />
      {children}
      {isMedia800 && <MobileNavbar />}
      {searchModal && (
        <motion.div
          initial={{ opacity: 0, zIndex: 102 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <SearchModal />
        </motion.div>
      )}
      <div
        onClick={handleCloseSearchModal}
        className={`header__search-overlay ${searchModal ? 'overlay-active' : ''}`}
      />
      <Footer />
    </>
  )
}

export default Layout
