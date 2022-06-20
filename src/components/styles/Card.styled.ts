import styled from 'styled-components';

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`;

interface Props {
  width?: string;
  onClick?: (e: Event) => void;
  direction?: 'column' | 'row';
  border?: boolean;
}

export const StyledCard = styled.div<Props>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: stretch;
  background-color: #fff;
  border: ${({ border }) => (border ? 'solid' : '')};
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  padding: 20px;
  width: ${({ width }) => width};
  cursor: pointer;

  & h3 {
    opacity: 0.6;
  }
`;
