import ListProductsItem from '../ListProductsItem';
import { Container } from './styles';

function ListProducts() {
  return (
    <Container>
      <ListProductsItem />
      <ListProductsItem />
      <ListProductsItem />
    </Container>
  );
}

export default ListProducts;
