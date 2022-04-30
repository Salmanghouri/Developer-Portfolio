import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header'

import { Fade,Bounce,Flip } from "react-awesome-reveal";

import Whatcandoyet from './components/Whatcandoyet'
import Footer from './Footer'
import Navbar from './Navbar'


export default function Home() {
  return (
  <>
<Fade duration='100'>
<Header/>
 <Whatcandoyet/>
 </Fade>
 <a className="fixed bottom-0 right-0 flex items-center justify-center h-8 pl-1 pr-2 mb-6 mr-4 text-blue-100 bg-blue-600 rounded-full shadow-lg hover:bg-blue-600" href="https://twitter.com/lofiui" target="_top"> Join Our Community</a>
  </>
  )
}
