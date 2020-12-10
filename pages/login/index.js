import Head from "next/head";
import { useEffect, useState } from "react";
import Router from "next/router";
import client from "../../api/apollo-client";
import { LOGIN } from "../../api/queries";
import { Input } from "antd";
import { useForm } from "react-hook-form";
import { data } from "autoprefixer";
import { ApolloProvider, useQuery, useLazyQuery } from "@apollo/client";

function LoginPage({ client }) {
  const [creds, setCreds] = useState();
  const [doLogin, { loading, data }] = useLazyQuery(LOGIN);

  const { register, handleSubmit } = useForm();

  if (data) console.log(data);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    // setCreds({
    //   loginUsername: data.username,
    //   loginPassword: data.password,
    // });

    doLogin({
      variables: {
        loginUsername: data.username,
        loginPassword: data.password,
      },
    });
  });

  // const [user, setUser] = useState(props.user)
  // const [authorized, setAuthorized] = useState(false)

  // useEffect ( (e)=>{

  //   if(!authorized) {
  //     Router.push('/login')
  //   }

  // }, [])

  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col  min-h-screen w-screen bg-gray-50 justify-center">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center font-sans-serif text-xl">
            Welcome To the Login Page {data && data.toString()}
          </div>
        </div>

        <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block"
              >
                Username
              </label>
              <input
                name="username"
                ref={register()}
                type="text"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div>
              <label
                htmlFor=""
                className="text-sm font-bold text-gray-600 block "
              >
                Password
              </label>
              <input
                name="password"
                ref={register()}
                type="password"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
            </div>

            <div className="flex items-center justify-between ">
              <div className="flex items-center">
                <input
                  name="remember"
                  ref={register()}
                  type="checkbox"
                  className="h-4 w-4 text-blue-500 rounded"
                />
                <label htmlFor="" className="ml-2 text-gray-600">
                  Remember me
                </label>
              </div>

              <div className="font-medium text-sm text-blue-500">
                Forgot Password?
              </div>
            </div>

            <div className="mt-5">
              <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-small">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://.../data`)
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }

export default LoginPage;
