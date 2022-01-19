import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Header from '.';
import theme from '../../styles/theme';

describe('Header Component', () => {
  it('renders correctly', () => {
    const { debug } = render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );

    expect(screen.getByPlaceholderText('Buscar...'));
  });
});
