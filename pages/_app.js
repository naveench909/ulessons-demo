import '../styles/globals.css'
import { AppProvider } from '../component/context';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }) {
  return (
  <RecoilRoot>
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  </RecoilRoot>
  )
}

export default MyApp
