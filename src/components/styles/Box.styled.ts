import styled from 'styled-components'

interface BoxProps {
  height?: string
  minHeight?: string
  width?: string
  marginTop?: string
  padding?: string
  position?: 'relative' | 'absolute'
  color?: string
  fontSize?: string
  top?: string
  left?: string
  bottom?: string
  right?: string
  transform?: string
  msTransform?: string
  outline?: boolean
  shadow?: boolean
}

export const Box = styled.div<BoxProps>`
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  width: ${({ width }) => width};
  margin-top: ${({ marginTop }) => marginTop};
  padding: ${({ padding }) => padding};
  position: ${({ position }) => position};
  color: ${({ color }) => color};
  left: ${({ left }) => left};
  top: ${({ top }) => top};
  bottom: ${({ bottom }) => bottom};
  right: ${({ right }) => right};
  transform: ${({ transform }) => transform};
  font-size: ${({ fontSize }) => fontSize};
  outline: ${({ outline }) => (outline ? '4px solid' : '')};
  outline-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ shadow }) => (shadow ? '0 0 10px rgba(0, 0, 0, 0.15)' : '')};
`
