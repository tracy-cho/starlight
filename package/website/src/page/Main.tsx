import React from "react";
import classNames from "classnames/bind";

import {Page} from "components/layout/Page";

import styles from "./Main.module.scss";

type MainProps = {
    forwardRef: any
};

const cx = classNames.bind(styles);

const Main: React.FC<MainProps> = ({forwardRef}) => {
    return <Page forwardRef={forwardRef} cs={cx(styles.Main)}>
        <aside>
            메인
        </aside>
        <main>
            <header>
                <span className={cx(styles.title)}>A Hundred Billion Stars, A Hundred Billion Lights.</span>
            </header>
            <hr className={cx(styles.top)}/>
            <div className={cx(styles.center)}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <hr className={cx(styles.bottom)}/>
        </main>
    </Page>;
};

export {Main}
