import React from 'react';
import '@/styles/about.css';
// Components
import { TEXT } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';

export const About = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].about;

    return (
        <div id="about-body" className="page-body">
            <div className="about-div">
                <div className="about-textdiv" >
                    <h1>{currentText.basicInfo.category}</h1>
                    <p>
                        <ul>
                            <li>{currentText.basicInfo.height}</li>
                            <li>{currentText.basicInfo.birthday}</li>
                            <li>{currentText.basicInfo.favoriteFood}</li>
                            <li>{currentText.basicInfo.favoriteGame}</li>
                            <li>{currentText.basicInfo.hobby}</li>
                            <li>{currentText.basicInfo.notice1}</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="about-div">
                <div className="about-textdiv">
                    <h1>里程碑</h1>
                    <p>
                        <ul>
                            <li>2022.09.13 開始實況✓</li>
                            <li>2022.09.22 實況盟友✓</li>
                            <li>2022.09.26 100追隨✓</li>
                            <li>2023.02.08 1000追隨✓</li>
                            <li>2023.11.27 1000訂閱✓特別感謝惜竹♥</li>
                            <li>2024.01.28 V皮初配信/車車16級</li>
                            <li>2024.07.30 合作夥伴✓</li>
                        </ul>
                    </p>
                </div>
            </div>

            <div className="about-div">
                <div className="about-textdiv">
                    <h1>繪師&素材</h1>
                    <p>
                        <ul>
                            <li>
                                V皮繪製：
                                <a href="https://twitter.com/fuwafuwafumi" target="_blank" rel="noreferrer">
                                    透明尾巴
                                </a>
                            </li>
                            <li>
                                V皮建模：
                                <a href="https://twitter.com/HuwaDuck" target="_blank" rel="noreferrer">
                                    步羽呼哇
                                </a>
                            </li>
                            <li>
                                頭像：
                                <a href="https://twitter.com/tongkong080" target="_blank" rel="noreferrer">
                                    同空
                                </a>
                            </li>
                            <li>
                                封面：
                                <a href="https://x.com/ma_ho_sho_jo_" target="_blank" rel="noreferrer">
                                    燒酒
                                </a>
                            </li>
                            <li>
                                關於我：
                                <a href="https://twitter.com/ChingChingUwU" target="_blank" rel="noreferrer">
                                    凌澄
                                </a>
                            </li>
                            <li>
                                離線圖片：
                                <a href="https://x.com/JIUYAN_1209" target="_blank" rel="noreferrer">
                                    九煙
                                </a>
                            </li>
                            <li>
                                斗內跑馬燈：
                                <a href="https://twitter.com/sixleafs" target="_blank" rel="noreferrer">
                                    六葉
                                </a>
                            </li>
                            <li>純音樂時的BGM：
                                <a href="https://www.youtube.com/watch?v=d6c7vSgkbtc&list=LL&index=18&t=2954s&ab_channel=zukisuzukiBGM"
                                    target="_blank" rel="noreferrer">
                                    YT
                                </a>
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div >
    )
}
