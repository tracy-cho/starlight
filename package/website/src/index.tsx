import React from 'react';
import ReactDOM from 'react-dom/client';

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
            <App/>
        </RecoilRoot>
    </React.StrictMode>,
);

reportWebVitals();
