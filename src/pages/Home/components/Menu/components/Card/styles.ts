import styled from 'styled-components'

export const ItenContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 6.12rem 1.5rem 1.25rem 1.5rem;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;

  position: relative;

  img {
    position: absolute;
    top: -22px;
    width: 120px;
    height: 120px;
  }
`
export const Title = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-size: 1.25rem;
  line-height: 1.3;
  font-weight: 'bold';
  margin-top: 1rem;
`
export const Type = styled.span`
  font-family: 'Roboto', sans-serif;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  background: ${(props) => props.theme['yellow-light']};
  font-weight: 700;
  color: ${(props) => props.theme['yellow-dark']};
  font-size: 0.625rem;
  margin-top: 0.75rem;
`
export const Subtitle = styled.p`
  margin-top: 0.5rem;
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
`

export const PriceContainer = styled.footer`
  display: flex;
  margin-top: 2.06rem;
  gap: 1.43rem;
  align-items: center;
`
export const Price = styled.div`
  font-family: 'Baloo 2', cursive;
  font-size: 1.5rem;
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    line-height: 1.3;
  }
`
export const QuantityContainer = styled.div`
  display: flex;
  padding: 0.53rem 0.5rem;
  background: ${(props) => props.theme['base-button']};
  gap: 0.25rem;
  border-radius: 6px;

  span {
    font-family: 'Roboto', sans-serif;
    line-height: 1.3;
  }

  button {
    border: none;
    background: none;
    color: ${(props) => props.theme.purple};
    display: flex;
    align-items: center;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const ShoppingCartButton = styled.button`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme['purple-dark']};
  transition: background-color 0.25s;

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
export const TypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`
