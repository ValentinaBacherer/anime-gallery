import styled from 'styled-components'

interface GridProps {
  gap?: string
  maxHeight?: string
  gridTemplateColumns?: string
  gridTemplateRows?: string
  justifyContent?: 'center' | 'start' | 'end' | 'space-between' | 'space-evenly' | 'space-around'
}

export const Grid = styled.div<GridProps>`
  display: grid;
  max-height: ${({ maxHeight }) => maxHeight};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justifyContent }) => justifyContent};
`
