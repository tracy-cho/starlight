import React from "react";
import classNames from "classnames/bind";
import { NavLink } from "react-router-dom";

import { Page } from "components/layout/Page";

import styles from "./Error.module.scss";

type ErrorProps = {
    forwardRef: React.LegacyRef<HTMLDivElement>
};

const cx = classNames.bind(styles);

const Error: React.FC<ErrorProps> = ({ forwardRef }) => {
  return <Page forwardRef={forwardRef} cs={cx(styles.Error)}>
    <div className={cx(styles.textWrapper)}>
      <h3>404</h3>
      <span>đť</span>
      <p>ě´ęłłěë ěëŹ´ę˛ë ěě´ě.</p>
      <NavLink to={'/'}>ëěę°ě.</NavLink>
    </div>
  </Page>;
};

export { Error };
