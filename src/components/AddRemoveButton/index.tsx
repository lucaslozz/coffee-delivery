import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityContainer } from './styles'

interface AddRemoveButtonProps {
  quantity: number
  increaseQuantity: () => void
  decreaseQuantity: () => void
}

export function AddRemoveButton({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}: AddRemoveButtonProps) {
  function handleUpdateCoffeeQuantity(option: 'add' | 'remove') {
    switch (option) {
      case 'add': {
        return increaseQuantity()
      }

      case 'remove': {
        if (quantity > 1) {
          decreaseQuantity()
        }
        return quantity
      }

      default:
        return quantity
    }
  }
  return (
    <QuantityContainer>
      <button
        type="button"
        onClick={() => handleUpdateCoffeeQuantity('remove')}
      >
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => handleUpdateCoffeeQuantity('add')}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityContainer>
  )
}
