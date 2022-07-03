import React from "react";
import classNames from "classnames/bind";

import styles from "./Page.module.scss";

type PageProps = {
    forwardRef: React.LegacyRef<HTMLDivElement>;
    children: React.ReactNode;
};

const cx = classNames.bind(styles);

const Page: React.FC<PageProps> = ({children, forwardRef}) => {
    return <div className={cx(styles.Page)} ref={forwardRef}
                style={{backgroundImage: `url(${process.env.PUBLIC_URL}/noise.svg)`}}>
        {children}
    </div>;
};

export {Page}
