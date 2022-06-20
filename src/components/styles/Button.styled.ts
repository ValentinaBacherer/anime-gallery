import styled from 'styled-components';

interface Props {
  bg?: string;
  color?: string;
}

export const StyledButton = styled.button<Props>`
  border-radius: 5px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 6px 12px;
  background-color: ${({ bg }) => bg || '#e8e8e8'};
  color: ${({ color }) => color || '#333'};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
