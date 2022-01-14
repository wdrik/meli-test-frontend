import Image from 'next/image';

import { Container, ProductInfo, Locale } from './styles';

function ListProductsItem() {
  const handleRedirect = (): void => {
    console.log('handleRedirect');
  };

  return (
    <Container onClick={handleRedirect}>
      <Image
        src="/Screenshot_1.png"
        alt="Logo Mercado Livre"
        width={163}
        height={163}
      />

      <ProductInfo>
        <div>
          <h3>$ 1980</h3>

          <Image
            src="/icon_shipping.png"
            alt="Shipping"
            width={18}
            height={18}
          />
        </div>

        <p>Apple Mackbook Air 256 SDD - Cinza Espacial Super conservado!</p>
      </ProductInfo>

      <Locale>São Paulo</Locale>
    </Container>
  );
}

export default ListProductsItem;
