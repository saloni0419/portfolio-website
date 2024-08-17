import { ChakraProvider } from "@chakra-ui/react"
import PropTypes from "prop-types"
import { WagmiConfig, createConfig, mainnet } from "wagmi"
import { theme } from "../utils/theme"
import { Header } from "../components/Header"
import "../styles/globals.css"
import { ConnectKitProvider, getDefaultConfig } from "connectkit"

const wagmiConfig = createConfig(
  getDefaultConfig({
   
    appName: "Saloni",
    appDescription: "Saloni",
  
  })
)

export default function App({ Component, pageProps }) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ConnectKitProvider>
        <ChakraProvider theme={theme}>
          <Header />
          <Component {...pageProps} />
        </ChakraProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

App.propTypes = {
  Component: PropTypes.any.isRequired,
  pageProps: PropTypes.any.isRequired,
}
