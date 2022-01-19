import { render, screen } from '@testing-library/react';
import Button from '.';

describe('Button Component', () => {
  it('renders correctly', () => {
    render(
      <Button backgroundColor="blue" color="white">
        Buy
      </Button>
    );

    expect(screen.getByText('Buy')).toBeInTheDocument();
  });
});
