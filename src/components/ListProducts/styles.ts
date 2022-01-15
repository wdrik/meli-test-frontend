import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 1120px;
  background: ${(props) => props.theme.colors.white};
  margin: 0 auto;
  border-radius: 4px;
  padding: 16px;
  margin-top: 20px;
`;
