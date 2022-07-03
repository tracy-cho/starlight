import React from 'react';
import ReactDOM from 'react-dom/client';

import {BrowserRouter} from "react-router-dom";

import {RecoilRoot} from "recoil";

import 'style/reset.scss';
import 'style/common.scss'

import {App} from './App';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(
    document.getElementById('star-light') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </RecoilRoot>
    </React.StrictMode>,
);

reportWebVitals();
