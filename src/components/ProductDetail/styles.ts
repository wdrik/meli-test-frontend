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

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 64px;
`;

export const ProductInfo = styled.article`
  margin: 16px 32px 0 32px;
  flex: 1;

  span.details {
    font-size: 14px;
    margin-bottom: 16px;
    display: block;
  }

  h1 {
    font-size: 24px;
    color: ${(props) => props.theme.colors.dark};
    margin-bottom: 32px;
  }

  span.price {
    font-size: 46px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.dark};
    margin-bottom: 32px;
    display: block;
  }
`;

export const ProductDescription = styled.section`
  width: 100%;

  h3 {
    font-size: 28px;
    color: ${(props) => props.theme.colors.dark};
    margin-bottom: 32px;
  }

  p {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;
