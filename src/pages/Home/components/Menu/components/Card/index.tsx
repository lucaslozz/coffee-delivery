import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../../../context/CartContext'
import {
  ButtonContainer,
  ItenContainer,
  Price,
  PriceContainer,
  QuantityContainer,
  ShoppingCartButton,
  Subtitle,
  Title,
  Type,
  TypeContainer,
} from './styles'

interface CardProps {
  name: string
  price: string
  image: string
  description: string
  type: string[]
}

export function Card({ name, description, price, image, type }: CardProps) {
  const { cartItens, addItemToCart } = useContext(CartContext)
  const [coffeeQuantity, setCoffeeQuantity] = useState(1)

  function handleUpdateCoffeeQuantity(option: 'add' | 'remove') {
    switch (option) {
      case 'add': {
        return setCoffeeQuantity(coffeeQuantity + 1)
      }

      case 'remove': {
        if (coffeeQuantity > 1) {
          setCoffeeQuantity(coffeeQuantity - 1)
        }
        return coffeeQuantity
      }

      default:
        return coffeeQuantity
    }
  }

  function addProductToCart() {
    const cartItemAdded = {
      id: name,
      name,
      price,
      image,
      quantity: coffeeQuantity,
    }
    addItemToCart(cartItemAdded)
    setCoffeeQuantity(1)
  }

  return (
    <ul>
      <ItenContainer key={name}>
        <img src={image} alt={name} />
        <TypeContainer>
          {type.map((item) => (
            <Type key={item}>{item.toUpperCase()}</Type>
          ))}
        </TypeContainer>
        <Title>{name}</Title>
        <Subtitle>{description}</Subtitle>
        <PriceContainer>
          <Price>
            <span>R$ </span>
            {price}
          </Price>
          <ButtonContainer>
            <QuantityContainer>
              <button
                type="button"
                onClick={() => handleUpdateCoffeeQuantity('remove')}
              >
                <Minus size={14} weight="bold" />
              </button>
              <span>{coffeeQuantity}</span>
              <button
                type="button"
                onClick={() => handleUpdateCoffeeQuantity('add')}
              >
                <Plus size={14} weight="bold" />
              </button>
            </QuantityContainer>

            <ShoppingCartButton type="button" onClick={addProductToCart}>
              <ShoppingCartSimple size={22} color="#F3F2F2" />
            </ShoppingCartButton>
          </ButtonContainer>
        </PriceContainer>
      </ItenContainer>
    </ul>
  )
}
