import React from "react";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";

type MenuProps = {
    open?: boolean
};

const cx = classNames.bind(styles);

const Menu: React.FC<MenuProps> = ({open = true}) => {
    return <div className={cx(styles.Menu, styles[open ? 'open' : 'close'])}>
        <div className={cx(styles.menuIcon)}>
            <div className={cx(styles.bar, styles.first)}/>
            <div className={cx(styles.bar, styles.second)}/>
            <div className={cx(styles.bar, styles.third)}/>
        </div>
        <span className={cx(styles.text)}>menu</span>
    </div>;
};

export {Menu}
