import Layout from '@/components/Layout'
import '@/styles/globals.css'
import { Provider } from 'react-redux'
import { store } from '../pages/store/store'

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>

  )
}
// export default wrapper.withRedux(MyApp);