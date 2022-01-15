import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 72px;
  padding: 12px;
  background: ${(props) => props.theme.colors.primary};

  div {
    width: 100%;
    height: 100%;
    max-width: 1120px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
`;
