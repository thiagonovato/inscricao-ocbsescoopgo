import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box
}

html, body, #root {
  height: 100%;
  background: linear-gradient(#e6e7e9, #fff);
}

body {
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font: 14px 'Roboto', sans-serif;
}

a {
  text-decoration: none
}

ul {
  list-style: none
}

button {
  cursor: pointer
}
`;
