import { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
      --bg-main: #ffffff;
      --bg-secondary: #F8F8F8;
      --text-main: #121417;
      --text-secondary: #8A8A89;
      --text-contrast: #ffffff;
      --text-light: rgba(18, 20, 23, 0.7);
      --text-error: #d75c7d;
      --accent-main: #83c0c7;
      --accent-secondary: #9dd0d6;
      --accent-sat: #4c888f;
      --accent-contrast: #121417;
      --price: #38CD3E;
      --border-light: rgba(18, 20, 23, 0.2);
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
        background-color: var(--bg-main);
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

export const fadeInScaleAndRotate = keyframes`
  from {
    opacity: 0;
    transform:  scale(0.01) rotate(360deg);
  }
  to {
    opacity: 1;
    transform:  scale(1);
  }
`;

export const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform:  translateX(-100vw);
  }
  to {
    opacity: 1;
    transform:  translateX(0);
  }
`;
