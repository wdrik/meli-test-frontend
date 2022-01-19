import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import ListProducts from '.';
import AppContext from '../../contexts/appContext';
import { AppContextProvider } from '../../contexts/appContext';
import theme from '../../styles/theme';

describe('ListProducts Component', () => {
  it('renders no items found for the search', () => {
    render(
      <AppContextProvider>
        <ThemeProvider theme={theme}>
          <ListProducts />
        </ThemeProvider>
      </AppContextProvider>
    );

    expect(
      screen.getByText('Nenhum produto encontrado para a pesquisa...')
    ).toBeInTheDocument();
  });

  it('renders items found for the search', () => {
    const stateMocked = {
      author: { name: 'John', lastname: 'Dow' },
      categories: [],
      items: [
        {
          id: 'XyfFEf4l8h4ilghi',
          title: 'Product Title',
          price: {
            currency: 'BRL',
            amount: 0,
            decimals: 0,
          },
          picture: 'http://http2.mlstatic.com/dake',
          condition: '',
          free_shipping: '',
        },
      ],
    };

    render(
      <AppContext.Provider value={{ state: stateMocked, setState: () => {} }}>
        <ThemeProvider theme={theme}>
          <ListProducts />
        </ThemeProvider>
      </AppContext.Provider>
    );

    expect(screen.getByText('Product Title')).toBeInTheDocument();
  });
});
