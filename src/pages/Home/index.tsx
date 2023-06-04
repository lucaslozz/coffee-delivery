import { Information } from './components/Information.tsx'
import { Menu } from './components/Menu/index.js'
import { MainContainer } from './styles'

export function Home() {
  return (
    <MainContainer>
      <Information />
      <Menu />
    </MainContainer>
  )
}
