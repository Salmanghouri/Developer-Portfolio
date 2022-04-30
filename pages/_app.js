import "../styles/globals.css";
import Footer from './Footer'
import Navbar from './Navbar'
function MyApp({ Component, pageProps }) {
  return(
<>
  <Navbar/>
    <Component {...pageProps} />
    <br/>
    <Footer/>
    </>
    )
}

export default MyApp;
