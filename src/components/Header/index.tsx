import Image from 'next/image';
import Link from 'next/link';
import SearchBar from '../SearchBar';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div>
        <Link href="/">
          <a>
            <Image
              src="/logo_ml.png"
              alt="Logo Mercado Livre"
              width={53}
              height={36}
              objectFit="cover"
            />
          </a>
        </Link>

        <SearchBar />
      </div>
    </Container>
  );
}

export default Header;
