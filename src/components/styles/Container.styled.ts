import styled from 'styled-components'

interface Props {
  width?: string
}

export const Container = styled.div<Props>`
  width: ${({ width }) => width || '1150px'};
  max-width: 100%;
  min-heigh: 100%;
  margin: 0 auto;
`
