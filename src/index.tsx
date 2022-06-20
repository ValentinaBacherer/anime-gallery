import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ApolloProvider } from '@apollo/client'
import client from './common/apollo-client'
import { ThemeProvider } from 'styled-components'
import theme from './common/styles/theme'
import GlobalStyle from './components/styles/Global'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>
)
