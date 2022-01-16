import { useContext, useEffect, useState } from 'react';

import AppContext, { Item } from '../../contexts/appContext';
import ListProductsItem from '../ListProductsItem';
import { Container } from './styles';

function ListProducts() {
  const { state } = useContext(AppContext);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    setItems(state.items);
  }, [state]);

  return (
    <Container>
      {items.length ? (
        items.map((item) => <ListProductsItem key={item.id} {...item} />)
      ) : (
        <h3 className="message">
          Nenhum produto encontrado para a pesquisa atual
        </h3>
      )}
    </Container>
  );
}

export default ListProducts;
