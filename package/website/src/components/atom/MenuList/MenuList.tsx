import React from "react";
import classNames from "classnames/bind";

import styles from "./MenuList.module.scss";
import {NavLink} from "react-router-dom";

type MenuListProps = {};

const cx = classNames.bind(styles);

const MenuList: React.FC<MenuListProps> = () => {
    return <ul className={cx(styles.MenuList)}>
        <li>
            <NavLink
                to={"/"}
            >
                메인
            </NavLink>
        </li>
        <li>
            <NavLink
                to={"/guest"}
            >
               guest
            </NavLink>
        </li>
    </ul>;
};

export {MenuList}
