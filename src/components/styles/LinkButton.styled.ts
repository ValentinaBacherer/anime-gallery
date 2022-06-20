import styled from 'styled-components';

interface LinkButtonProps {
  width?: string;
}

export const LinkButton = styled.button<LinkButtonProps>`
  background: transparent;
  border: none;
  text-transform: capitalize;
  cursor: pointer;
  color: '#333';
  padding-left: 0.25rem;
  width: ${({ width }) => width};
  opacity: 0.6;

  &:hover {
    transform: scale(0.98);
  }
`;
