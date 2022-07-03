import React from "react";
import classNames from "classnames/bind";

import styles from "./Main.module.scss";

type MainProps = {
    forwardRef: any
};

const cx = classNames.bind(styles);

const Main: React.FC<MainProps> = ({forwardRef}) => {
    return <div className={cx(styles.Main)} ref={forwardRef}>
        <aside>
            메인
        </aside>
        <main>
            main
        </main>
    </div>;
};

export {Main}
