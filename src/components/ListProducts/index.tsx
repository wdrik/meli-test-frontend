import { useContext, useEffect, useState } from 'react';

import AppContext, { Item } from '../../contexts/appContext';
import ListProductsItem from '../ListProductsItem';
import { Container, Wrapper, Divider } from './styles';

function ListProducts() {
  const { state } = useContext(AppContext);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(state.items);
  }, [state]);

  return (
    <Container>
      <Wrapper>
        {items.length ? (
          items.map((item, index) => (
            <>
              <ListProductsItem key={item.id} {...item} />
              {index < items.length - 1 && <Divider />}
            </>
          ))
        ) : (
          <h3 className="message">
            Nenhum produto encontrado para a pesquisa...
          </h3>
        )}
      </Wrapper>
    </Container>
  );
}

export default ListProducts;
