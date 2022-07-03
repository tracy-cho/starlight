import React from "react";
import classNames from "classnames/bind";

import styles from "./Guest.module.scss";

type GuestProps = { forwardRef: any };

const cx = classNames.bind(styles);

const Guest: React.FC<GuestProps> = ({forwardRef}) => {
    return <div ref={forwardRef} style={{backgroundImage: `url(${process.env.PUBLIC_URL}/noise.svg)`}}
                className={cx(styles.Guest)}>
        <aside>
            게스트
        </aside>
        <main>
            main
        </main>
    </div>;
};

export {Guest}
