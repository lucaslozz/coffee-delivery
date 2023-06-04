import { produce } from 'immer'
export interface Cart {
  id: string
  name: string
  price: string
  image: string
  quantity: number
}

export interface CartState {
  cartItens: Cart[]
}

export function CartReduce(state: CartState, action: any) {
  switch (action.type) {
    case 'ADD_ITEM_TO_CART': {
      return produce(state, (draft) => {
        draft.cartItens.push(action.payload.cartItem)
      })
    }
    case 'REMOVE_ITEM_FROM_CART': {
      return produce(state, (draft) => {
        const cartItensWithOutRemoved = draft.cartItens.filter(
          (cart) => cart.id !== action.payload.cartItem.id,
        )
        console.log(cartItensWithOutRemoved)
        draft.cartItens = cartItensWithOutRemoved
      })
    }
    default:
      return state
  }
}
