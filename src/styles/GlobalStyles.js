import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
  --color-black: #1B1D1F;
  --color-black2: #111315;
  --color-grey: #6F757C;
  --color-green: #BEE3CC;
  --color-red: #FEF7EE;
  --color-red2:#ED735D;
  --color-orange: #F6C768;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "DM Sans", sans-serif;
  color: var(--color-red);
  line-height: 1.5;
  font-size: 1.6rem;
}

#root{
  height: 100vh;
}

button {
  cursor: pointer;
  font: inherit;
  color: inherit;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

/* Parent selector, finally 😃 */
button:has(svg) {
  line-height: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

`

export default GlobalStyles
