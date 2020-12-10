import Head from 'next/head'
import {useEffect, useState} from 'react'
import Router from 'next/router'

 function LoginPage(props) {

  // const [user, setUser] = useState(props.user)
  // const [authorized, setAuthorized] = useState(false)

  // useEffect ( (e)=>{

  //   if(!authorized) {
  //     Router.push('/login')
  //   }


  // }, [])


  return (
    <div >
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen w-screen bg-blue-500 justify-center relative " >
        <h1 className=" absolute  bottom-1/2 left-1/3 box-border rounded   w-1/3  text-white  py-8  text-3xl justify-center  text-bold bg-yellow-500 text-center">
          Welcome to the login
        </h1>
       
      </div>

    
    </div>
  )
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default LoginPage