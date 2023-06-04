import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { Cart, CartReduce } from '../reducers/Cart/reducer'

interface CartContextProviderProps {
  children: ReactNode
}

interface CartContextType {
  cartItens: Cart[]
  addItemToCart: (cartItem: Cart) => void
  removeItemToCart: (cartItem: Cart) => void
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    CartReduce,
    { cartItens: [] },
    (state) => {
      const storedState = localStorage.getItem('@coffee-delivery:cart')
      if (storedState) {
        const storedStateAsJSON = JSON.parse(storedState)
        return { ...state, cartItens: storedStateAsJSON }
      }

      return state
    },
  )

  const { cartItens } = cartState

  function addItemToCart(cartItem: Cart) {
    dispatch({
      type: 'ADD_ITEM_TO_CART',
      payload: {
        cartItem,
      },
    })
  }
  function removeItemToCart(cartItem: Cart) {
    dispatch({
      type: 'REMOVE_ITEM_FROM_CART',
      payload: {
        cartItem,
      },
    })
  }
  useEffect(() => {
    const ItensToStorage = JSON.stringify(cartItens)
    localStorage.setItem('@coffee-delivery:cart', ItensToStorage)
  }, [cartItens])
  return (
    <CartContext.Provider
      value={{ cartItens, addItemToCart, removeItemToCart }}
    >
      {children}
    </CartContext.Provider>
  )
}
