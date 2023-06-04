import { ShoppingCartSimple, Trash } from '@phosphor-icons/react'
import { useContext, useState } from 'react'
import { CartContext } from '../../../../../../context/CartContext'
import {
  ButtonContainer,
  ItenContainer,
  Price,
  PriceContainer,
  ShoppingCartButton,
  Subtitle,
  Title,
  Type,
  TypeContainer,
} from './styles'
import { AddRemoveButton } from '../../../../../../components/AddRemoveButton'

interface CardProps {
  name: string
  price: string
  image: string
  description: string
  type: string[]
}

export function Card({ name, description, price, image, type }: CardProps) {
  const { cartItens, addItemToCart, removeItemToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const isItemInCart = cartItens.some((item) => item.id === name)

  function increaseQuantity() {
    setQuantity(quantity + 1)
  }

  function decreaseQuantity() {
    setQuantity(quantity - 1)
  }

  function handleAddItem() {
    const cartItemToAdd = {
      id: name,
      name,
      price,
      image,
      quantity,
    }
    addItemToCart(cartItemToAdd)
  }
  function handleRemoveItem() {
    const cartItemToRemove = {
      id: name,
      name,
      price,
      image,
      quantity,
    }
    removeItemToCart(cartItemToRemove)
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
            <AddRemoveButton
              quantity={quantity}
              isItemInCart={!!isItemInCart}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
            />
            {isItemInCart ? (
              <ShoppingCartButton type="button" onClick={handleRemoveItem}>
                <Trash size={22} color="#F3F2F2" />
              </ShoppingCartButton>
            ) : (
              <ShoppingCartButton type="button" onClick={handleAddItem}>
                <ShoppingCartSimple size={22} color="#F3F2F2" />
              </ShoppingCartButton>
            )}
          </ButtonContainer>
        </PriceContainer>
      </ItenContainer>
    </ul>
  )
}
