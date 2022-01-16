import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;
  max-width: 1120px;
  background: ${(props) => props.theme.colors.white};
  margin: 0 auto;
  border-radius: 4px;
  padding: 16px;
  margin-top: 18px;

  @media (max-width: 768px) {
    margin-top: 12px;
  }
`;

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Figure = styled.figure`
  display: block;
  position: relative;
  flex: 3;

  @media (max-width: 768px) {
    width: 100%;
    height: 300px;
    flex: inherit;
  }
`;

export const ProductInfo = styled.article`
  margin: 16px 32px 0 32px;
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
    flex: inherit;
  }

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

    @media (max-width: 768px) {
      font-size: 36px;
    }
  }
`;

export const ProductDescription = styled.section`
  width: 100%;

  h3 {
    font-size: 28px;
    color: ${(props) => props.theme.colors.dark};
    margin-bottom: 32px;

    @media (max-width: 768px) {
      font-size: 22px;
      margin-bottom: 24px;
    }
  }

  pre {
    font-size: 16px;
    margin-bottom: 32px;
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    word-wrap: break-word;
  }
`;
