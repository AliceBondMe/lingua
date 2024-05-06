import { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
      --bg-main: #ffffff;
      --bg-secondary: #F8F8F8;
      --text-main: #121417;
      --text-secondary: #8A8A89;
      --text-contrast: #ffffff;
      --text-light: rgba(18, 20, 23, 0.7);
      --accent-main: #E0A39A;
      --accent-secondary: #F2C0BD;
      --accent-sat: #bb5954;
      --accent-contrast: #121417;
      --backdrop: rgba(17, 18, 19, 0.40);
      --transition-main: 300ms ease-in-out;
        
    }


    body {
        margin: 0;
        font-family: 'Roboto', 'Oxygen','Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.25;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: var(--bg-main);
        color: var(--text-main);
    }

    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    ul, ol {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    a {
        color: currentColor;
        text-decoration: none;
    }

    button {
        font-family: inherit;
        border: none;
        cursor: pointer;
    }

    input {
        font-family: inherit;

        &:focus {
            outline: none;
        }
    }

    img {
        display: block;
        max-width: 100%;
        height: auto;
        border: none;
    }

    ::-webkit-scrollbar {
      width: 8px;
    } 

    ::-webkit-scrollbar-thumb {
      background-color: var(--accent-main);
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
`;

export const fadeInScale = keyframes`
  from {
    opacity: 0;
    transform:  scale(0.01) rotate(360deg);
  }
  to {
    opacity: 1;
    transform:  scale(1);
  }
`;
