import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
`;

export const Wrapper = styled.section`
  width: 100%;
  height: auto;
  max-width: 1120px;
  background: ${(props) => props.theme.colors.white};
  margin: 16px auto;
  border-radius: 4px;
  padding: 16px;

  .message {
    text-align: center;
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.colors.light};
  margin: 16px 0;
`;
