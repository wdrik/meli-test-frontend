import Image from 'next/image';
import SearchBar from '../SearchBar';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <Image
          src="/logo_ml.png"
          alt="Logo Mercado Livre"
          width={53}
          height={36}
        />

        <SearchBar />
      </div>
    </Container>
  );
}

export default Header;
