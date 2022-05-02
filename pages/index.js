import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js Movie App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/* <h1> Let's build Hulu 2.0</h1> */}
    {/* Header Component */}
    <Header />
    {/* Navbar Component */}
    <Navbar />
    {/* Results Component */}
    </div>
  )
}
