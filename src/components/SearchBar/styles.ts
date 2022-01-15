import styled from 'styled-components';

export const Container = styled.div``;

export const Input = styled.input`
  width: 100%;
  background: ${(props) => props.theme.colors.white};
  border: 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  height: 40px;
  padding: 0 8px;
  margin-left: 20px;
  font-size: 18px;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
  :-ms-input-placeholder {
    color: ${(props) => props.theme.colors.gray};
  }
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  padding: 0;
  background: ${(props) => props.theme.colors.light};
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
`;
