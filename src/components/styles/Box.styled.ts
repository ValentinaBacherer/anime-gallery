import styled from 'styled-components';

interface BoxProps {
  height?: string;
  minHeight?: string;
  width?: string;
  marginTop?: string;
  padding?: string;
}

export const Box = styled.div<BoxProps>`
  height: ${({ height }) => height};
  min-height: ${({ minHeight }) => minHeight};
  width: ${({ width }) => width};
  margin-top: ${({ marginTop }) => marginTop};
  padding: ${({ padding }) => padding};
`;
