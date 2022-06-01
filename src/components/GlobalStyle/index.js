// Import Global Style
import { createGlobalStyle } from "styled-components";

/**
 * Membuat Global Style.
 * Global Style: CSS Reset, Font.
 * Pindahkan isi index.css ke GlobalStyle
 */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }
`;

// export Global Style
export default GlobalStyle;