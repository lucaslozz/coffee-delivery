import {
  ButtonContainer,
  CartButtonCount,
  CheckoutButton,
  HeaderContainer,
  LocalButton,
} from './styles'
import logoHome from '../../assets/logoHome.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export function Header() {
  const { cartItens } = useContext(CartContext)
  console.log(cartItens)

  return (
    <HeaderContainer>
      <NavLink to="/" title="home">
        <img src={logoHome} alt="" />
      </NavLink>
      <div>
        <ButtonContainer>
          <LocalButton title="locale" type="button">
            <MapPin size={22} color={'#8047F8'} weight="fill" />
            <a href="#">Arapiraca, AL</a>
          </LocalButton>
          <CheckoutButton>
            <ShoppingCart size={22} color="#C47F17" weight="fill" />
            {cartItens.length > 0 && (
              <CartButtonCount>{cartItens.length}</CartButtonCount>
            )}
          </CheckoutButton>
        </ButtonContainer>
      </div>
    </HeaderContainer>
  )
}
