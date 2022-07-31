import React from "react";
import classNames from "classnames/bind";

import styles from "./Page.module.scss";

type PageProps = {
    forwardRef: React.LegacyRef<HTMLDivElement>;
    children: React.ReactNode;
    cs?: any;
};

const cx = classNames.bind(styles);

const Page: React.FC<PageProps> = ({ children, forwardRef, cs }) => {
  return <div className={cx(styles.Page, cs)} ref={forwardRef}
    style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/noise.svg)` }}>
    {children}
  </div>;
};

export { Page };
