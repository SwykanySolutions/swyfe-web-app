import theme from '@components/Theme'
import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
