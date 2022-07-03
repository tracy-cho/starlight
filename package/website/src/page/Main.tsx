import React from "react";
import classNames from "classnames/bind";

import {Page} from "components/layout/Page";

import styles from "./Main.module.scss";

type MainProps = {
    forwardRef: any
};

const cx = classNames.bind(styles);

const Main: React.FC<MainProps> = ({forwardRef}) => {
    return <Page forwardRef={forwardRef}>
        <aside>
            메인
        </aside>
        <main>
            main
        </main>
    </Page>;
};

export {Main}
