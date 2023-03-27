import Head from "next/head";
import Script from "next/script";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Ditta Artigianale Torotno</title>
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        dangerouslySetInnerHTML=
        {{
          __html: `(function (w, d, s, l, i) {
              w[l] = w[l] || [];
              w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
              var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != "dataLayer" ? "&l=" + l : "";
              j.async = true;
              j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
              f.parentNode.insertBefore(j, f);
            })(window, document, "script", "dataLayer", "GTM-N9RHGPN");`,
        }}
      </Script>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
