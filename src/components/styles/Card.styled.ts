import styled from 'styled-components'

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`

interface Props {
  width?: string
  maxHeight?: string
  onClick?: (e: Event) => void
  direction?: 'column' | 'row'
  justifyContent?: 'space-between' | 'flex-start'
  border?: boolean
}

export const StyledCard = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: stretch;
  background-color: #fff;
  border: ${({ border }) => (border ? 'solid' : '')};
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 15px 18px;
  width: ${({ width }) => width};
  max-height: ${({ maxHeight }) => maxHeight};
  cursor: pointer;

  & h3 {
    opacity: 0.6;
  }
`
