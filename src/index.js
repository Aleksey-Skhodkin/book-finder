import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-background-color: rgb(225,220,197);
        --secondary-background-color: rgb(235, 235, 235);
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 1rem;
        scroll-behavior: smooth;

        & li {
            list-style: none;
        }
    }

    body {
        font-family: "Lucida Grande", Verdana, Helvetica, Arial, sans-serif;
        background-color: var(--primary-background-color);
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <>
                    <GlobalStyle />
                    <App />
                </>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

