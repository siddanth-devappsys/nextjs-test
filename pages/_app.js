import '../styles/globals.css'
import '../scss/user/custom.scss'
import { SessionProvider } from "next-auth/react"
import Layout from '../component/layout'
import Sidebar from '../component/sidebar'


function MyApp({ Component, pageProps:{session,...pageProps} }) {
//   const getLayout = Component.getLayout || ((page) => page)

  return(
      <SessionProvider session={pageProps.session}>
            <Component {...pageProps} />
      </SessionProvider>
    )
}

export default MyApp
