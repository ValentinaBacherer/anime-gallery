import styled from 'styled-components'

interface GridProps {
  gap?: string
  gridTemplateColumns?: string
  justifyContent?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly' | 'space-around'
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justifyContent }) => justifyContent};
`
