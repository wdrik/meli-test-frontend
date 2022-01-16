import Image from 'next/image';

import { ProductDetailItem } from '../../pages/items/[id]';
import theme from '../../styles/theme';
import Button from '../Button';

import {
  Container,
  Wrapper,
  ProductInfo,
  ProductDescription,
  Figure,
} from './styles';

function ProductDetail({ item }: ProductDetailItem) {
  return (
    <Container>
      <Wrapper>
        <Figure>
          <Image
            src={item.picture}
            alt={`Imagem: ${item.title}`}
            layout="fill"
            objectFit="contain"
          />
        </Figure>

        <ProductInfo>
          <span className="details">Novo - 234 Vendidos</span>

          <h1>{item.title}</h1>

          <span className="price">
            {item.price.amount.toLocaleString('es-ar', {
              style: 'currency',
              currency: 'ARS',
              minimumFractionDigits: 2,
            })}
          </span>

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
