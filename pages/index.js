import Head from 'next/head'


 function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen w-screen bg-blue-500 justify-center absolute" >
        <h1 className="box-content text-white  py-8  text-3xl   text-bold bg-yellow-500 text-center">
          Welcome to the party
        </h1>
       
      </div>

    
    </div>
  )
}

export default Home