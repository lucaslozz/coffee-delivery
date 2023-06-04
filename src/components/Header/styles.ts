import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 11vw;
  justify-content: space-between;
  width: 100%;
  background: ${(props) => props.theme.background};
  position: fixed;
  z-index: 99;
  align-items: center;
`

export const LocalButton = styled.button`
  display: flex;
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.3;
  gap: 0.25rem;
  align-items: center;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border: none;
  border-radius: 6px;
`
export const CheckoutButton = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  position: relative;
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`
export const CartButtonCount = styled.span`
  display: flex;
  position: absolute;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: ${(props) => props.theme['yellow-dark']};
  align-items: center;
  justify-content: center;
  top: -0.5rem;
  right: -0.5rem;

  color: ${(props) => props.theme.white};
  border-radius: 50%;
  font-size: 0.75rem;
  line-height: 1.3;
  font-weight: 700;
`
