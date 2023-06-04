import styled, { css } from 'styled-components'

type IconProps = {
  color: 'purple' | 'yellow-dark' | 'yellow' | 'base-text'
}
export const BackgroundContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    opacity: 0.8;

    width: 100%;
    height: 100%;

    background: url('https://raw.githubusercontent.com/lucaslozz/coffe-delivery/0fb2ee3417f77c84c478b9b2a703e001e76fec2e/src/assets/backgroundIntro.svg')
      no-repeat center center / cover;
  }
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 3.5rem;
  margin: 11.3rem auto;
  padding: 0 11vw;
`
export const InfoTitle = styled.h1`
  display: flex;
  flex-wrap: wrap;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  font-size: 3rem;
  color: ${(props) => props.theme['base-title']};
`
export const InfoSubtitle = styled.p`
  font-size: 1.25rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`
export const InfoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
export const InfoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.31rem;
`
export const InfoContentList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
`
export const InfoContentListItem = styled.li`
  display: flex;
  font-family: 'Roboto', sans-serif;
  align-items: center;
  gap: 0.75rem;
  font-weight: 400;
  line-height: 1.3;
`

export const Icon = styled.span<IconProps>`
  ${({ theme, color }) => css`
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 50%;
    background: ${theme[color]};
  `}
`
