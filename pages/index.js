import Head from "next/head";
import { useEffect, useState } from "react";
import Router from "next/router";
import Cookies from "js-cookie";
import { ApolloProvider, useQuery, useLazyQuery } from "@apollo/client";
import { GETME, LOGIN } from "../api/queries";

function Home(props) {
  const [user, setUser] = useState();

  const [doGetMe, { loading, data }] = useLazyQuery(GETME);

  // const [doLogin, { loading, data }] = useLazyQuery(LOGIN);

  // console.log(loading, " me is", me);

  console.log("zdata z ", data);

  useEffect((e) => {
    // doLogin({
    //   variables: {
    //     loginUsername: "sus",
    //     loginPassword: "sus",
    //   },
    // });

    const token = Cookies.get("auth");
    console.log(token);
    console.log("tokn?");
    if (!token) {
      Router.push("/login");
    } else {
      //validate token, get user, set user
      doGetMe({
        variables: { verifyTokenToken: token },
      });
    }
  }, []);

  return (
    <div>
      <Head>
        <title>Main Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-screen w-screen bg-blue-500 justify-center relative ">
        <h1 className=" absolute  bottom-1/2 left-1/3 box-border rounded   w-1/3  text-white  py-8  text-3xl justify-center  text-bold bg-yellow-500 text-center">
          Welcome to the party {data ? data.verifyToken.username : ""}
        </h1>
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

export default Home;
