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
            <div key={item.id}>
              <ListProductsItem {...item} />
              {index < items.length - 1 && <Divider />}
            </div>
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
