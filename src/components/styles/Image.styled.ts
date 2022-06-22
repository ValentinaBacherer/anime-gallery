import styled from 'styled-components'

interface Props {
  heigth?: string
  width?: string
  borderRadius?: string
  opacity?: string
}

export const StyledImage = styled.img<Props>`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: ${({ borderRadius }) => borderRadius};
  object-fit: cover;
  opacity: ${({ opacity }) => opacity}; ;
`
