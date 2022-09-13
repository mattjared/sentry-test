import Header from './Header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <div className="body-bg min-h-screen pt-20 pb-6 px-2 ">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}