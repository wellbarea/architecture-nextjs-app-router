import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    font-family: 'Albert Sans', sans-serif;
    line-height: 1.5;
    background-color: #f8f9fa;
    color: #212529;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: #007bff;
    text-decoration: none;
    background-color: transparent;

    &:hover {
      color: #0056b3;
      text-decoration: underline;
    }
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
  }

  button {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
