import { useContext } from 'react';

import AppContext from '../../contexts/appContext';
import ListProductsItem from '../ListProductsItem';
import { Container } from './styles';

function ListProducts() {
  const { state } = useContext(AppContext);

  console.log('state', state);

  return (
    <Container>
      <ListProductsItem />
      <ListProductsItem />
      <ListProductsItem />
    </Container>
  );
}

export default ListProducts;
