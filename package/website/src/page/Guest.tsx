import React from "react";
import classNames from "classnames/bind";

import { Page } from "components/layout/Page";

import styles from "./Guest.module.scss";

type GuestProps = { forwardRef: any };

const cx = classNames.bind(styles);

const Guest: React.FC<GuestProps> = ({ forwardRef }) => {
  return <Page forwardRef={forwardRef}>
    <aside>
            게스트
    </aside>
    <main>
            main
    </main>
  </Page>;
};

export { Guest };
