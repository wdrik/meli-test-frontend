import Image from 'next/image';

import { ProductDetailItem } from '../../pages/items/[id]';
import theme from '../../styles/theme';
import Button from '../Button';

import { Container, Wrapper, ProductInfo, ProductDescription } from './styles';

function ProductDetail({ item }: ProductDetailItem) {
  console.log(item);

  return (
    <Container>
      <Wrapper>
        <Image
          src={item.picture}
          alt="Logo Mercado Livre"
          width={680}
          height={680}
        />

        <ProductInfo>
          <span className="details">Novo - 234 Vendidos</span>

          <h1>{item.title}</h1>

          <span className="price">$ {item.price.amount}</span>

          <Button
            backgroundColor={theme.colors.blue}
            color={theme.colors.white}
          >
            Comprar
          </Button>
        </ProductInfo>
      </Wrapper>

      <ProductDescription>
        <h3>Descrição do Produto</h3>

        <pre>{item.description}</pre>
      </ProductDescription>
    </Container>
  );
}

export default ProductDetail;
