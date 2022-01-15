import Image from 'next/image';
import theme from '../../styles/theme';
import Button from '../Button';

import { Container, Wrapper, ProductInfo, ProductDescription } from './styles';

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
      <Wrapper>
        <Image
          src="/Screenshot_1.png"
          alt="Logo Mercado Livre"
          width={680}
          height={680}
        />

        <ProductInfo>
          <span className="details">Novo - 234 Vendidos</span>

          <h1>Apple Mackbook Air 256 SDD - Cinza Espacial Super conservado!</h1>

          <span className="price">$ 1980</span>

          <Button
            backgroundColor={theme.colors.blue}
            color={theme.colors.white}
          >
            Comprar
          </Button>
        </ProductInfo>
      </Wrapper>

      <ProductDescription>
        <h3>Product Description</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure a vel
          est? Harum accusamus doloremque earum dolorum, explicabo ullam sint ad
          rerum, pariatur velit ea autem fugit ipsum, corrupti commodi? Lorem
          ipsum dolor sit amet, consectetur adipisicing elit. Iure a vel est?
          Harum accusamus doloremque earum dolorum, explicabo ullam sint ad
          rerum, pariatur velit ea autem fugit ipsum, corrupti commodi?
        </p>
      </ProductDescription>
    </Container>
  );
}

export default ProductDetail;
