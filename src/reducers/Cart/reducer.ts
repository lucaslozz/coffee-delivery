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
      const itemAlreadyExistsIndex = state.cartItens.findIndex(
        (item) => item.id === action.payload.cartItem.id,
      )
      return produce(state, (draft) => {
        if (itemAlreadyExistsIndex < 0) {
          draft.cartItens.push(action.payload.cartItem)
        } else {
          draft.cartItens[itemAlreadyExistsIndex].quantity =
            draft.cartItens[itemAlreadyExistsIndex].quantity +
            action.payload.cartItem.quantity
        }
      })
    }
    default:
      return state
  }
}
