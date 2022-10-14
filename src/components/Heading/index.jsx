import { bool, node } from 'prop-types';

import { Title } from './style';

export const Heading = ({ children, light = false }) => {
  return <Title light={light}>{children}</Title>;
};

Heading.propTypes = {
  children: node.isRequired,
  light: bool.isRequired,
};
