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
            메인
        </aside>
        <main>
            <header>
                <span className={cx(styles.title)}>A Hundred Billion Stars, A Hundred Billion Lights.</span>
            </header>
            <hr className={cx(styles.top)}/>
            <div className={cx(styles.center)}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
            </div>
            <hr className={cx(styles.bottom)}/>
            <article>
                <div className={cx(styles.thumbnail)}>
                    <img
                        src="https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29zdGVubG9zZSUyMGJpbGRlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>

                </div>

                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝며, 군영과 내려온 방황하였으며, 청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과
                    놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음 따뜻한 무엇을 듣는다. 반짝며, 군영과 내려온 방황하였으며, 청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나
                    할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음 따뜻한 무엇을 듣는다. 반짝며, 군영과 내려온
                    방황하였으며, 청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가?
                    열락의 얼음 따뜻한 무엇을 듣는다. 반짝며, 군영과 내려온 방황하였으며, 청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을
                    약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음 따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은
                    청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <div className={cx(styles.thumbnail)}>
                    <img
                        src="https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29zdGVubG9zZSUyMGJpbGRlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>

                </div>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>    <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <div className={cx(styles.thumbnail)}>
                    <img
                        src="https://images.unsplash.com/photo-1564648351416-3eec9f3e85de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8a29zdGVubG9zZSUyMGJpbGRlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
                        alt=""/>

                </div>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>
                <p>봄날의 영원히 트고, 구하기 같은 놀이 힘차게 이것이다. 이상을 않는 속에서 무한한 사막이다. 이성은 구하기 만물은 방지하는 따뜻한 부패뿐이다. 있으며, 군영과 내려온 방황하였으며,
                    청춘에서만 위하여 청춘 무엇을 듣는다. 무엇이 얼마나 할지라도 이상 보이는 돋고, 고동을 어디 생명을 약동하다. 일월과 놀이 커다란 이것을 바이며, 소금이라 있는가? 열락의 얼음
                    따뜻한 무엇을 듣는다. 반짝이는 아니더면, 있는 아름답고 인간의 얼음과 눈이 그리하였는가? 꽃이 동력은 청춘 앞이 귀는 것은 행복스럽고 우리 인간이 것이다.</p>

            </article>
        </main>
    </Page>;
};

export {Main}
