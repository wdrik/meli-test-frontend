import { Container } from './styles';

interface ButtonProps {
  children: React.ReactNode;
  backgroundColor: string;
  color: string;
}

function Button({ children, backgroundColor, color }: ButtonProps) {
  return (
    <Container backgroundColor={backgroundColor} color={color}>
      {children}
    </Container>
  );
}

export default Button;
