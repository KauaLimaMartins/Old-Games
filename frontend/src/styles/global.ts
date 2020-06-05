import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    font-size: 14px;
  }
  
  body {
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased !important;
  }
  
  button: {
    cursor: pointer;
  }
`;
