import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme: { colors } }) => css`
    background: ${colors.secondaryColor};
  `}
`;
