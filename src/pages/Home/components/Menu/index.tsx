import { Card } from './components/Card'
import { ListContainer, MenuContainer, PrimaryTitle } from './styles'
import { coffeData } from '../../../../data/coffeData'

export function Menu() {
  return (
    <MenuContainer>
      <PrimaryTitle>Nossos cafés</PrimaryTitle>
      <ListContainer>
        {coffeData.map((item) => {
          return <Card {...item} key={item.name} />
        })}
      </ListContainer>
    </MenuContainer>
  )
}
