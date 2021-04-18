import Head from 'next/head'


export default function Home() {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Head>
        <title>portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <h1>
          Welcome to <a href="">My Portfolo</a>
        </h1>
      </main>
    </div>
  )
}
