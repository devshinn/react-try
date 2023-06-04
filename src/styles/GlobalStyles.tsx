// src/styles/GlobalStyles.tsx
import React from "react";
import { createGlobalStyle, css } from "styled-components";
import tw, { theme, GlobalStyles as BaseStyles } from "twin.macro";

// const CustomStyles = createGlobalStyle({
//   // body: {
//   //   WebkitTapHighlightColor: theme`colors.purple.100`,
//   //   ...tw`antialiased`,
//   // },
// });
const CustomStyles = createGlobalStyle`
	
	body {
		-webkit-tap-highlight-color: ${theme`colors.purple.100`};
		${{ ...tw`antialiased` }};
    color: var(--color);
    background-color: var(--browser);
  }

`;

const GlobalStyles = () => (
  <>
    <CustomStyles />
    <BaseStyles />
  </>
);

export default GlobalStyles;
