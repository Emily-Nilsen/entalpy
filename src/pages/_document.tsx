import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="no">
      <Head>
        <link rel="icon" href="/media/Logo_Entalpy.png" />
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
