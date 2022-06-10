import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Scroll from '../components/Scroll'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Scroll>
      <Component {...pageProps} />
    </Scroll>
  )
}

export default MyApp
