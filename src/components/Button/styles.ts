import styled from 'styled-components';

export const Container = styled.button<{
  backgroundColor: string;
  color: string;
}>`
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};

  cursor: pointer;
  flex: 1;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.8);
  }
`;
