// pages/_app.js
import "../styles/globals.css";
import { ApolloProvider, useQuery } from "@apollo/client";
import client from "../api/apollo-client";

export default function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
