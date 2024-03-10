import Header from '../modules/Header/Header'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => (
  <>
    <Header />
    {children}
  </>
)

export default Layout
