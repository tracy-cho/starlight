import React from "react";
import classNames from "classnames/bind";

import styles from "./MenuList.module.scss";

type MenuListProps = {};

const cx = classNames.bind(styles);

const MenuList: React.FC<MenuListProps> = () => {
    return <div className={cx(styles.MenuList)}>
        
    </div>;
};

export {MenuList}
