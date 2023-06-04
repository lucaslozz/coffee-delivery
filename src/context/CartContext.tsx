import { ReactNode, createContext, useReducer } from 'react'
import { Cart, CartReduce } from '../reducers/Cart/reducer'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cartItens: Cart[]
  addItemToCart: (cartItem: Cart) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(CartReduce, { cartItens: [] })

  const { cartItens } = cartState

  function addItemToCart(cartItem: Cart) {
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        cartItem,
      },
    })
  }
  return (
    <CartContext.Provider value={{ cartItens, addItemToCart }}>
      {children}
    </CartContext.Provider>
  )
}
