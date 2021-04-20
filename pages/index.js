
import Head from 'next/head'
import Header from "../components/Header";
import About from "../components/about";


export default function Home() {
  
  return (
    <div className="">
      <Head>
        <title>portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Header />     
        <About />
      </main>
    </div>
  )
}


