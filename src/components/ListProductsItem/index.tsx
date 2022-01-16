import Image from 'next/image';
import Link from 'next/link';

import { Item } from '../../contexts/appContext';

import { Container, ProductInfo, Locale } from './styles';

function ListProductsItem(item: Item) {
  return (
    <Link href={`/items/${item.id}`}>
      <a>
        <Container>
          <Image
            src={item.picture}
            alt="Logo Mercado Livre"
            width={163}
            height={163}
          />

          <ProductInfo>
            <div>
              <span className="price">$ {item.price.amount}</span>

              <Image
                src="/icon_shipping.png"
                alt="Shipping"
                width={18}
                height={18}
              />
            </div>

            <p>{item.title}</p>
          </ProductInfo>

          <Locale>São Paulo</Locale>
        </Container>
      </a>
    </Link>
  );
}

export default ListProductsItem;
