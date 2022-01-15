import Image from 'next/image';
import Link from 'next/link';

import { Container, ProductInfo, Locale } from './styles';

function ListProductsItem() {
  return (
    <Link href="/items/123">
      <a>
        <Container>
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
      </a>
    </Link>
  );
}

export default ListProductsItem;
