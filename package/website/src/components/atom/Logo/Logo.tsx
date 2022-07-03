import React from "react";
import classNames from "classnames/bind";

import styles from "./Logo.module.scss";

type LogoProps = {};

const cx = classNames.bind(styles);

const Logo: React.FC<LogoProps> = () => {
    return <svg className={cx(styles.Logo)} width="75" height="75" viewBox="0 0 75 75" fill="none"
                xmlns="http://www.w3.org/2000/svg">
        <path
            d="M38.366 6L65.2128 52.5C65.5977 53.1667 65.1166 54 64.3468 54H10.6532C9.88341 54 9.40228 53.1667 9.78719 52.5L36.634 5.99999C37.0189 5.33333 37.9811 5.33333 38.366 6Z"
            fill="#9FAD9E" stroke="#4A2619" strokeWidth="4"/>
        <path
            d="M37.004 66.04L12.4002 23.425C12.0153 22.7584 12.4964 21.925 13.2663 21.925H62.4738C63.2436 21.925 63.7247 22.7584 63.3398 23.425L38.7361 66.04C38.3512 66.7067 37.3889 66.7067 37.004 66.04Z"
            fill="#AA675D" stroke="#4A2619" strokeWidth="4"/>
        <path d="M26.8652 43.64L37.5 25.22L48.1348 43.64H26.8652Z" fill="#C49C38" stroke="#4A2619" strokeWidth="4"/>
    </svg>;
};

export {Logo}
