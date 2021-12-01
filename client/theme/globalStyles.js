import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        line-height: 1.4;
    }
    html, button{
        font-family: Poppins;
        background-color: ${({ theme }) => theme.pallette.black[50]};
    }

`
