import { Html, Head, Main, NextScript } from 'next/document'
import { Body } from '../components/components'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>EsmiK's portfolio</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
