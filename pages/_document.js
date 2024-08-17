import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Saloni Singh"
        />
        <meta itemProp="name" content="Saloni Singh" />
        <meta
          itemProp="description"
          content="Saloni Singh"
        />
       
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Saloni" />
        <meta
          name="twitter:description"
          content="Saloni Singh"
        />
        
        <link rel="icon" href="/favicon.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
