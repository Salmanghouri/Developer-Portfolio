import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header'
import { Fade,Bounce,Flip } from "react-awesome-reveal";
import Whatcandoyet from './components/Whatcandoyet'



export default function Home() {
  return (
  <>
<Bounce duration='100'>
<Header/>
 <Whatcandoyet/>
 </Bounce>
  </>
  )
}
