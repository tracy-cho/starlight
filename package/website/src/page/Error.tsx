import React from "react";
import classNames from "classnames/bind";

import {Page} from "components/layout/Page";

import styles from "./Error.module.scss";

type ErrorProps = {
    forwardRef: React.LegacyRef<HTMLDivElement>
};

const cx = classNames.bind(styles);

const Error: React.FC<ErrorProps> = ({forwardRef}) => {
    return <Page forwardRef={forwardRef}>
        404
    </Page>;
};

export {Error}
