import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,html, body{
        margin: 0;
        padding: 0;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    body {
        height: 100vh;
    }

    a, a:hover, a:focus, a:active {
        text-decoration: none;
        color: inherit;
    }

    a:hover {
        cursor: pointer;
        color: ${({ theme }) => theme.colors.secondary}
    }

    #root {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }
`;

export default GlobalStyle;
