import Image from 'next/image';
import { useRouter } from 'next/router';
import { FormEvent, useContext, useState } from 'react';

import AppContext, { IAppContext } from '../../contexts/appContext';
import { api } from '../../services/api';

import { Container, Button, Input } from './styles';

function SearchBar() {
  const [text, setText] = useState('');
  const { setState } = useContext(AppContext);
  const router = useRouter();

  async function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await api.get(`/items?q=${text}`);

    const newState: IAppContext = {
      author: response.data.author,
      categories: response.data.categories,
      items: response.data.items,
    };

    setState(newState);

    router.push('/');
  }

  return (
    <Container onSubmit={(e) => handleSearch(e)}>
      <Input
        type="text"
        placeholder="Buscar..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button type="submit">
        <Image
          src="/icon_search.png"
          alt="Icon Search"
          width={18}
          height={18}
        />
      </Button>
    </Container>
  );
}

export default SearchBar;
