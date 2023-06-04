import styled from 'styled-components'

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
