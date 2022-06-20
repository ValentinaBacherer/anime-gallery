import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Poppins', sans-serif;
    margin:0;
}

p {
    font-size: 0.75rem;
    opacity: 0.6;
}

span {
    font-size: 0.75rem;
    opacity: 0.6;
}

h1 {
    font-size: 2rem;
    font-weight: 800;
}

h2 {
    font-size: 1rem;
    font-weight: 600;
}

h3 {
    font-size: 0.75rem;
    font-weight: 600;
}

h4 {
    font-size: 0.75rem;
    font-weight: 600;
}

img {
    max-width: 100%;
}
`

export default GlobalStyle
