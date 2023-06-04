import styled from 'styled-components'

export const MenuContainer = styled.article`
  width: 100%;
  margin-top: 2rem;
  gap: 3.375rem;
  padding: 0 11vw;
  justify-content: center;
`
export const PrimaryTitle = styled.h1`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  color: ${(props) => props.theme['base-subtitle']};
`
export const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem 2rem;
  margin-top: 3rem;
`
