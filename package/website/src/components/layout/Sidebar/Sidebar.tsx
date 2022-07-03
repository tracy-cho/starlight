import React from "react";
import classNames from "classnames/bind";
import {NavLink} from "react-router-dom";

import {useRecoilState} from "recoil";
import {isSidebarOpen} from "store/ui";

import {Logo} from "components/atom/Logo";
import {Menu} from "components/atom/Menu";
import {MenuList} from "components/atom/MenuList";

import styles from "./Sidebar.module.scss";

type SidebarProps = {};

const cx = classNames.bind(styles);

const Sidebar: React.FC<SidebarProps> = () => {
    const [sidebarOpen, setSidebarOpen] = useRecoilState(isSidebarOpen)
    return <nav className={cx(styles.Sidebar)} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/noise.svg)`}}>
        <div className={cx(styles.logo)}>
            <NavLink to={'/'}>
                <Logo/>
            </NavLink>
        </div>
        <div className={cx(styles.menu)}
             onClick={() => setSidebarOpen(_ => !_)}>
            <Menu open={sidebarOpen}/>
        </div>
        <MenuList state={[sidebarOpen, setSidebarOpen]}/>
        <div className={cx(styles.signIn)}>
            <NavLink to={'/sign-in'}>
                SIGN <br/> IN
            </NavLink>
        </div>
        <div className={cx(styles.iconWrapper)}>
            <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M21 2.7011L18.75 3.0761L20.25 1.2011L17.625 1.9511C14.25 -1.7989 9 2.3261 10.5 5.7011C4.5 5.7011 1.5 1.2011 1.5 1.2011C1.5 1.2011 -0.75 4.5761 3 7.2011L0.75 6.4511C0.75 8.7011 2.25 10.2011 4.875 10.9511H2.25C3.75 13.9511 6.375 13.9511 6.375 13.9511C6.375 13.9511 4.125 15.8261 0 15.8261C12.375 21.8261 19.875 10.5761 18.75 4.5761L21 2.7011Z"
                    fill="var(--brown-100)"/>
            </svg>

            <a href="https://github.com/tracy-cho">
                <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M10.5 0.754395C9.12112 0.754395 7.75574 1.02599 6.48182 1.55366C5.2079 2.08133 4.05039 2.85476 3.07538 3.82977C1.10625 5.79891 0 8.46962 0 11.2544C0 15.8954 3.0135 19.8329 7.182 21.2294C7.707 21.3134 7.875 20.9879 7.875 20.7044C7.875 20.4629 7.875 19.8014 7.875 18.9299C4.9665 19.5599 4.347 17.5229 4.347 17.5229C3.864 16.3049 3.1815 15.9794 3.1815 15.9794C2.226 15.3284 3.255 15.3494 3.255 15.3494C4.305 15.4229 4.8615 16.4309 4.8615 16.4309C5.775 18.0269 7.3185 17.5544 7.917 17.3024C8.0115 16.6199 8.2845 16.1579 8.5785 15.8954C6.2475 15.6329 3.801 14.7299 3.801 10.7294C3.801 9.5639 4.2 8.6294 4.8825 7.88389C4.7775 7.6214 4.41 6.5294 4.9875 5.1119C4.9875 5.1119 5.8695 4.82839 7.875 6.1829C8.7045 5.95189 9.6075 5.8364 10.5 5.8364C11.3925 5.8364 12.2955 5.95189 13.125 6.1829C15.1305 4.82839 16.0125 5.1119 16.0125 5.1119C16.59 6.5294 16.2225 7.6214 16.1175 7.88389C16.8 8.6294 17.199 9.5639 17.199 10.7294C17.199 14.7404 14.742 15.6224 12.4005 15.8849C12.7785 16.2104 13.125 16.8509 13.125 17.8274V20.7044C13.125 20.9879 13.293 21.3239 13.8285 21.2294C17.997 19.8224 21 15.8954 21 11.2544C21 9.87552 20.7284 8.51014 20.2007 7.23622C19.6731 5.9623 18.8996 4.80479 17.9246 3.82977C16.9496 2.85476 15.7921 2.08133 14.5182 1.55366C13.2443 1.02599 11.8789 0.754395 10.5 0.754395Z"
                        fill="var(--brown-100)"/>
                </svg>
            </a>

        </div>
    </nav>;
};

export {Sidebar}
