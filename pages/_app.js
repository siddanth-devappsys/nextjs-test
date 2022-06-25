import '../styles/globals.css'
import '../scss/user/custom.scss'
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps:{session,...pageProps} }) {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    )
}

export default MyApp
