import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import ListProductsItem from '.';
import { Item } from '../../contexts/appContext';
import theme from '../../styles/theme';

describe('ListProductsItem Component', () => {
  const item: Item = {
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
  };

  it('renders correctly', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <ListProductsItem {...item} />
      </ThemeProvider>
    );

    expect(screen.getByText('Product Title')).toBeInTheDocument();
  });
});
