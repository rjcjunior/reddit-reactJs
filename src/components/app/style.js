import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
    html {
        font-size: 16px;
        overflow-x: hidden;
        line-height: 24px; 
    }
  
    *, *:after, *:before {
        box-sizing: border-box;
        margin: 0;
        padding: 0; 
    }
  
    body {
        min-height: 100vh;
        display: flex;
        flex-flow: column;
        font-display: swap;
        font-family: Helvetica, Arial, sans-serif;
        font-weight: normal;
        line-height: 1.5;
        margin: 0;
        font-smooth: always;
        -webkit-font-smoothing: antialiased;
        backface-visibility: hidden; 
    }
  
    .app{
        display:flex;
        flex-flow:column;
        width:100%;
    }

    .bold{
        font-weight:bold;
    }

    .orange{
        color: #ff5500;
    }

    .gray{
        color: #666666;
    }
        
    @-webkit-keyframes spin {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0)
        }

        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }

    @keyframes spin {
        0% {
            -webkit-transform: rotate(0);
            transform: rotate(0)
        }

        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg)
        }
    }

`;
export default GlobalStyle;