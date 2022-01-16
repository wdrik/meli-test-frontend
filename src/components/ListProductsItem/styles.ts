import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 1120px;
  background: ${(props) => props.theme.colors.white};
  margin: 0 auto;
  text-decoration: none;

  a {
    text-decoration: none;
    display: flex;
  }
`;

export const Figure = styled.figure`
  width: 180px;
  height: 180px;
  position: relative;

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`;

export const ProductInfo = styled.article`
  margin-left: 16px;
  flex: 1;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 32px;

    @media (max-width: 768px) {
      margin-bottom: 24px;
    }

    span.price {
      margin-right: 10px;
      font-size: 24px;
      font-weight: 400;
      color: ${(props) => props.theme.colors.dark};
      display: block;

      @media (max-width: 768px) {
        font-size: 18px;
      }
    }
  }

  p {
    font-size: 18px;
    color: ${(props) => props.theme.colors.gray};

    @media (max-width: 768px) {
      font-size: 16px;
    }
  }
`;

export const Locale = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.gray};
  margin: 32px 10% 0 0;

  @media (max-width: 768px) {
    margin: 0;
    font-size: 10px;
  }
`;
