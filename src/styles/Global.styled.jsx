import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
ul {
  padding: 0;
  list-style: none;
}`;
