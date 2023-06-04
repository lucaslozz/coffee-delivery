import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import coffeImg from '../../img/coffeImg.svg'
import {
  BackgroundContainer,
  Icon,
  InfoContainer,
  InfoContentContainer,
  InfoContentList,
  InfoContentListItem,
  InfoDescriptionContainer,
  InfoSubtitle,
  InfoTitle,
} from './styles'

export function Information() {
  const icons = [
    {
      name: 'ShoppingCart',
      message: 'Compra simples e segura',
    },
    {
      name: 'Package',
      message: 'Embalagem mantém o café intacto',
    },
    {
      name: 'Timer',
      message: 'Entrega rápida e rastreada',
    },
    {
      name: 'Coffee',
      message: 'O café chega fresquinho até vocé',
    },
  ]
  function createIcon(iconName: string) {
    switch (iconName) {
      case 'ShoppingCart':
        return (
          <Icon color="yellow-dark">
            <ShoppingCart size={22} color="white" />
          </Icon>
        )
      case 'Package':
        return (
          <Icon color="base-text">
            <Package size={22} color="white" />
          </Icon>
        )
      case 'Timer':
        return (
          <Icon color="yellow">
            <Timer size={22} color="white" />
          </Icon>
        )
      case 'Coffee':
        return (
          <Icon color="purple">
            <Coffee size={22} color="white" />
          </Icon>
        )
      default:
        return null
    }
  }

  return (
    <BackgroundContainer>
      <InfoContainer>
        <InfoContentContainer>
          <InfoDescriptionContainer>
            <InfoTitle>
              Encontre o café perfeito para qualquer hora do dia
            </InfoTitle>
            <InfoSubtitle>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </InfoSubtitle>
          </InfoDescriptionContainer>
          <InfoContentList>
            {icons.map((icon) => {
              return (
                <InfoContentListItem key={icon.name}>
                  {createIcon(icon.name)}
                  <p>{icon.message}</p>
                </InfoContentListItem>
              )
            })}
          </InfoContentList>
        </InfoContentContainer>
        <img src={coffeImg} alt="copo de café com a logo do Coffee Delivery" />
      </InfoContainer>
    </BackgroundContainer>
  )
}
