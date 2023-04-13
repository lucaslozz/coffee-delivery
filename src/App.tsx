import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaut'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <h1>Coffe Delivery</h1>
      <GlobalStyle />
    </ThemeProvider>
  )
}
