import Head from 'next/head'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import '../styles/globals.css'
import '../styles/variables.css'
function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="icon" href="/images/logo.jpg" />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}

export default MyApp
