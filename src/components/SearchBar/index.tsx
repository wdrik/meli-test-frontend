import Image from 'next/image';

import { Container, Button, Input } from './styles';

function SearchBar() {
  return (
    <Container>
      <div>
        <Input type="text" placeholder="Buscar..." />

        <Button>
          <Image
            src="/icon_search.png"
            alt="Icon Search"
            width={18}
            height={18}
          />
        </Button>
      </div>
    </Container>
  );
}

export default SearchBar;
