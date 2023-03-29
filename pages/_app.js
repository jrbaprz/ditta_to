import Head from "next/head";
import Script from "next/script";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ditta Artigianale Toronto</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
