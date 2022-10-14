import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,700;0,900;1,900&family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@100;400;500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62,5%;
  }

  body {
    font-size: ${({ theme }) => theme.fonts.sizes.medium};
    font-family: ${({ theme }) => theme.fonts.family.default};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({
      theme: {
        fonts: { family },
      },
    }) => family.secondary};
  }
`;
