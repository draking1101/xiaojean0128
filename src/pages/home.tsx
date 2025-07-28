import React from 'react';
// Images
import introImage from '@/assets/xiaojean/A.無分類/009-lieOnHeart.png'
import minecraftServer from "@/assets/xiaojean/A.無分類/007-cheapsever.png" // 麥塊 Cheap Server 圖片
import tear from "@/assets/xiaojean/F.形象圖/B02-粉絲形象-放大版.png"
// style
import '@/styles/home.css';  // 導入CSS
// Components
import { ReactTyped } from 'react-typed';
import { links, TEXT } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';
import { useLinkData } from '@/components/home/link_data';
import { LinkItem } from '@/components/home/link_item';

export const Home = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].home;
    const introText = TEXT[language].about;
    const linkData = useLinkData();

    return (
        <div className='page-body'>
            <div style={styles.home} >
                {/* 首頁Banner的動態文字 */}
                <div className='home-banner'>
                    <ReactTyped
                        strings={[currentText.banner.bannerTitle1]}
                        typeSpeed={language === "zh" ? 40 : 40}
                        showCursor={false}
                        startDelay={0} // 文字出現的延遲
                    />
                    <br />
                    <ReactTyped
                        strings={[currentText.banner.bannerTitle2]}
                        typeSpeed={language === "zh" ? 40 : 30}
                        showCursor={false}
                        startDelay={language === "zh" ? 1000 : 1700}
                    />
                    <br />
                    <ReactTyped
                        strings={[currentText.banner.bannerTitle3]}
                        typeSpeed={language === "zh" ? 40 : 30}
                        showCursor={false}
                        startDelay={language === "zh" ? 2200 : 3700}
                    />
                    <br />
                    <ReactTyped
                        strings={[currentText.banner.bannerTitle4]}
                        typeSpeed={language === "zh" ? 40 : 30}
                        showCursor={false}
                        startDelay={language === "zh" ? 3200 : 6400}
                    />
                    <br />
                    {/* 初配信連結 */}
                    <a className='home-followButton' href='https://youtu.be/8Elq9cp8se8?si=ekW3xpp2L36_L3u6' target='_blank' rel='noreferrer'>
                        <ReactTyped
                            strings={[currentText.banner.buttonText]}
                            typeSpeed={language === "zh" ? 40 : 30}
                            showCursor={false}
                            startDelay={language === "zh" ? 4300 : 9300}
                        />
                    </a>
                </div>

                {/* 首頁介紹 */}
                <section className='home-section'>
                    <div style={styles.section1Container} className='home-section1Container'>
                        <div className='home-section1IntroArea'>
                            <img src={introImage} alt="Logo" style={styles.section1Image} />
                            <p style={styles.section1Title}>{introText.basicInfo.title}</p>
                            <p>
                                <ul style={styles.section1content}>
                                    <li>{introText.basicInfo.height}</li>
                                    <li>{introText.basicInfo.birthday}</li>
                                    <li>{introText.basicInfo.favoriteFood}</li>
                                    <li>{introText.basicInfo.hobby}</li>
                                    <li>{introText.basicInfo.favoriteGame}</li>
                                    <li>{introText.basicInfo.notice1}</li>
                                    <li>{introText.basicInfo.notice2}</li>
                                </ul>
                            </p>
                        </div>
                        {/* 社群連結 */}
                        <div className='home-section1LinkArea'>
                            {linkData.map((link, index) => (
                                <LinkItem
                                    key={index}
                                    href={link.href}
                                    imgSrc={link.imgSrc}
                                    imgAlt={link.imgAlt}
                                    title={link.title}
                                    subtitle={link.subtitle}
                                />
                            ))}
                        </div>
                    </div>
                </section>

                {/* 粉絲形象 */}
                <section id='header-tear' className='home-section'>
                    <div className='tear-div-container'>
                        <div className='tear-logo-container'>
                            <img src={tear} alt="Logo" />
                        </div>
                        <div className='tear-intro-container'>
                            <li>{currentText.tear[1]}</li>
                            <li>{currentText.tear[2]}</li>
                            <li>{currentText.tear[3]}</li>
                            <li>{currentText.tear[4]}</li>
                            <li>{currentText.tear[5]}</li>
                        </div>
                    </div>
                </section>

                {/* 抖內連結 */}
                <section id='header-donate' className='home-section' style={{ flexDirection: 'column' }}>
                    <h1>{currentText.section2.donate}</h1>
                    <ul>
                        <li id='header-donate-link'>
                            <a href="https://deerdonate.herokuapp.com/donation/小靜しずか"
                                target="_blank" rel="noreferrer">
                                {currentText.section2.Link1}
                            </a>
                            |
                            <a href="https://reurl.cc/NYDy1k"
                                target="_blank" rel="noreferrer">
                                {currentText.section2.Link2}
                            </a>
                            {/* Remove PayPal Because of security issues, refer to https://x.com/iluyee161/status/1883712399020335297?s=46 */}
                        </li>
                        <li>
                            <a href="https://docs.google.com/spreadsheets/d/1TjnjalZ_7pMc8rbbINDAwAyPbCDrVy49r3A2YDErcHI/edit?usp=sharing"
                                target="_blank" rel="noreferrer">
                                {currentText.section2.item3}
                            </a>
                        </li>
                    </ul>
                </section>

                {/* Minecraft Server */}
                <section id='header-cheap-server' style={{ flexDirection: 'column', padding: '30px 0', listStyle: 'none', }}>
                    <img src={minecraftServer} alt="Lost" />
                    <div style={{ ...styles.center, textAlign: 'center' }}>
                        <p>
                            <li>{currentText.section3.line1}</li>
                            <li>{currentText.section3.line2}</li>
                            <li>
                                {currentText.section3.line3A}
                                <a href={links.home.cheapServer.discord} target="_blank" rel="noreferrer">
                                    {currentText.section3.linkText}
                                </a>
                                {currentText.section3.line3B}
                            </li>
                            <li>{currentText.section3.line4}</li>
                            <li id='cheap-server-link'>
                                <a href={links.home.cheapServer.website} target="_blank" rel="noreferrer" >
                                    <b style={{ ...styles.center, fontSize: '18px', cursor: 'pointer' }}>{currentText.section3.line5}</b>
                                </a>
                            </li>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export const styles: { [key: string]: React.CSSProperties } = {
    home: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    link: {
        textDecoration: 'none',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    // section 1 - introduction
    section1Container: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
    },
    section1Image: {
        height: '160px',
        width: '160px',
        borderRadius: '50%',
        border: '2px solid #ffd3e4',
        marginBottom: '10px',
        padding: 15
    },
    section1Title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#ffd3e4',
        marginBottom: '5px'
    },
    section1content: {
        fontSize: '16px',
        lineHeight: '1.5',
        color: '#D4EDFF',
    },
    // section1 - link item
    section1LinkItem: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '99%',
        height: 'auto',
        marginBottom: '8px',
        borderRadius: '10px',
        padding: '10px 20px',
    },
    section1LinkContainer: {
        width: '100%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
    },
    section1LinkItemImage: {
        width: '48px',
        height: '48px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    section1LinkItemContentContainer: {
        width: '100%',
    },
    section1LinkItemContentTitle: {
        color: '#ffd3e4',
    },
    section1LinkItemContentSubtitle: {
        color: '#D4EDFF',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
    }
};
