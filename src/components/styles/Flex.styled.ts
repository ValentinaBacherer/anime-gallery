import styled from 'styled-components';

interface FlexProps {
  direction?: 'column' | 'row';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'stretch';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
`;
