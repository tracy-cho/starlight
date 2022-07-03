import React from "react";
import {NavLink} from "react-router-dom";
import classNames from "classnames/bind";

import styles from "./MenuList.module.scss";

type MenuListProps = {
    state: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
};

const cx = classNames.bind(styles);

//TODO auth 처리하기
const list = [{
    route: 'mail',
    auth: 'admin'
}, {
    route: 'book',
}, {
    route: 'dev',
    auth: 'dev'
}, {
    route: 'draw',
}, {
    title: 'OTAKU',
    route: 'otaku-draw',
}, {
    route: 'memo',
}, {
    title: 'PIC',
    route: 'picture',
}, {
    route: 'dairy',
    auth: 'friend'
}, {
    route: 'guest',
}]

const MenuList: React.FC<MenuListProps> = ({state}) => {
    const [sidebarOpen, setSidebarOpen] = state
    return <ul className={cx(styles.MenuList, styles[sidebarOpen ? 'open' : 'close'])}
               style={{backgroundImage: `url(${process.env.PUBLIC_URL}/noise.svg)`}}>
        {
            list.map(({route, title}) => <li key={route} className={cx(styles.MenuItem)}>
                <NavLink
                    to={`/${route}`}
                    onClick={() => setSidebarOpen(_ => !_)}
                >
                    {title ?? route?.toUpperCase()}
                </NavLink>
                <div className={cx(styles.line)}/>
            </li>)
        }
    </ul>;
};

export {MenuList}
