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
  </>
  )
}
