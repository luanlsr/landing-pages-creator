import P from 'prop-types';

import { Title } from './style';

export const Heading = ({
  children,
  colorDark = true,
  as = 'h1',
  size = 'large',
  uppercase = false,
}) => {
  return (
    <Title colorDark={colorDark} as={as} size={size} uppercase={uppercase}>
      {children}
    </Title>
  );
};

Heading.propTypes = {
  children: P.node.isRequired,
  colorDark: P.bool.isRequired,
  as: P.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
  size: P.oneOf(['small', 'medium', 'large', 'huge']).isRequired,
  uppercase: P.bool.isRequired,
};
