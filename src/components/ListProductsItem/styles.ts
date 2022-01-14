import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 1200px;
  background: #ffffff;
  margin: 0 auto;
  border-radius: 4px;
  margin-top: 20px; // TODO

  display: flex;
`;

export const ProductInfo = styled.article`
  margin-left: 16px;
  flex: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 32px;

    h3 {
      margin-right: 10px;
      font-size: 24px;
      font-weight: 400;
      color: ${(props) => props.theme.colors.dark};
    }
  }

  p {
    font-size: 18px;
  }
`;

export const Locale = styled.span`
  font-size: 12px;
`;
