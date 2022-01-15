import Image from 'next/image';
import theme from '../../styles/theme';
import Button from '../Button';

import { Container } from './styles';

export type ProductDetailProps = {
  product: {
    id: string;
    description: string;
    price: 1000;
  };
};

function ProductDetail({ product }: ProductDetailProps) {
  return (
    <Container>
      <Image
        src="/Screenshot_1.png"
        alt="Logo Mercado Livre"
        width={680}
        height={680}
      />

      <Button backgroundColor={theme.colors.blue} color={theme.colors.white}>
        Comprar
      </Button>
    </Container>
  );
}

export default ProductDetail;
