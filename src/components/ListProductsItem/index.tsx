import Image from 'next/image';
import Link from 'next/link';

import { Item } from '../../contexts/appContext';

import { Container, ProductInfo, Locale, Figure } from './styles';

function ListProductsItem(item: Item) {
  return (
    <Container>
      <Link href={`/items/${item.id}`}>
        <a>
          <Figure>
            <Image
              src={item.picture}
              alt={`Imagem: ${item.title}`}
              layout="fill"
              objectFit="cover"
            />
          </Figure>

          <ProductInfo>
            <div>
              <span className="price">
                {item.price.amount.toLocaleString('es-ar', {
                  style: 'currency',
                  currency: 'ARS',
                  minimumFractionDigits: 2,
                })}
              </span>

              {item.free_shipping && (
                <Image
                  src="/icon_shipping.png"
                  alt="Shipping"
                  width={18}
                  height={18}
                />
              )}
            </div>

            <p>{item.title}</p>
          </ProductInfo>

          <Locale>{item.seller_address_city}</Locale>
        </a>
      </Link>
    </Container>
  );
}

export default ListProductsItem;
