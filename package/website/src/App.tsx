import React, {useRef} from "react";
import classNames from "classnames/bind";

import {Routes, Route, useLocation} from "react-router-dom";

import {CSSTransition, SwitchTransition} from "react-transition-group";

import {Sidebar} from "components/layout/Sidebar";
import {GuestPage, MainPage} from "./page";

import styles from "./App.module.scss";
import 'style/Transition.scss'

type AppProps = {};

const cx = classNames.bind(styles);
const App: React.FC<AppProps> = () => {
    const nodeRef = useRef(null)
    const location = useLocation();
    return <div className={cx(styles.App)}>
        <Sidebar/>
        <SwitchTransition mode={"out-in"}>
            <CSSTransition key={location.key} classNames="page" timeout={1000} nodeRef={nodeRef}>
                <Routes location={location}>
                    <Route path="/" element={<MainPage forwardRef={nodeRef}/>}/>
                    <Route path="/guest" element={<GuestPage forwardRef={nodeRef}/>}/>
                </Routes>
            </CSSTransition>
        </SwitchTransition>
    </div>;
};

export {App}
