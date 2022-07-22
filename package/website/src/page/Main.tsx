import React from "react";
import classNames from "classnames/bind";

import {Page} from "components/layout/Page";

import styles from "./Main.module.scss";

type MainProps = {
    forwardRef: any
};

const cx = classNames.bind(styles);

const Main: React.FC<MainProps> = ({forwardRef}) => {
    return <Page forwardRef={forwardRef} cs={cx(styles.Main)}>
        <aside>
            공사중
        </aside>
        <main>
            <header>
                <span className={cx(styles.title)}>A Hundred Billion Stars, A Hundred Billion Lights.</span>
            </header>
            <hr className={cx(styles.top)}/>
            <div className={cx(styles.center)}>
                <span>1</span>
                <span>2</span>
                <span>{new Date().toDateString()}</span>
            </div>
            <hr className={cx(styles.bottom)}/>
            <article>
                <div className={cx(styles.thumbnail)}>

                    <img
                        src={process.env.PUBLIC_URL+"thumbnail.png"}
                        alt=""/>
                    <p>진짜 어이없는데 지금 바탕화면에 있는 이미지가 이거밖에없다. 사이트 구축중인데 디자인이 맘에 안들어서 디자인 뭘 넣어야하나 하고있음 </p>

                </div>
            </article>
        </main>
    </Page>;
};

export {Main}
