import {Global,css} from '@emotion/react';
const globalStyles = css`
* {
    box-sizing: border-box;
  }
  
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }
  
  #root {
    display: flex;
    flex: 1;
    height: 100%;
  } 
  /* body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }  */
  `;
function GlobalStyles (){
   return <Global styles = {globalStyles}/>
}
export default GlobalStyles;