import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="no">
      <Head>
        <link
          rel="icon"
          href="https://res.cloudinary.com/dt3k2apqd/image/upload/q_auto/Entalpy/Logo_Entalpy_q4xaqn.png"
        />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/gnu4bgp.css"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
