import React from "react";
import classNames from "classnames/bind";

import {Sidebar} from "components/layout/Sidebar";

import styles from "./App.module.scss";

type AppProps = {};

const cx = classNames.bind(styles);

const App: React.FC<AppProps> = () => {
    return <div className={cx(styles.App)}>
        <Sidebar/>
        <aside>
            aside
        </aside>
        <main>
            main
        </main>
    </div>;
};

export {App}
