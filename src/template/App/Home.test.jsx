// import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import Home from './index';

test('renders learn react link', () => {
  renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.colors.primaryColor,
  });

  expect(headingContainer).toHaveStyleRule('background', 'blue');
});
