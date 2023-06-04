import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaut'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext'
import { Router } from './routes/Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  )
}
