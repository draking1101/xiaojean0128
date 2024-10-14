import React from 'react';

export const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.footerContainer}>
                {/* Social Media Links */}
                <div style={styles.socialLinks}>
                    <h4 style={styles.title}>社群媒體</h4>
                    <div style={styles.socialLinksColumns}>
                        <div style={styles.column}>
                            <p>
                                <a href="https://discord.gg/wyCzz4MJnh" target="_blank" rel="noreferrer" style={styles.socialLink}>
                                    <img src={require('@/assets/xiaojean/C.社群網站的icon/Discord-white.png')} alt="Discord" style={styles.icon} />
                                    Discord
                                </a>
                            </p>
                            <p>
                                <a href="https://www.facebook.com/xiaojean0128/?show_switched_toast=0&show_invite_to_follow=0&show_switched_tooltip=0&show_podcast_settings=0&show_community_review_changes=0&show_community_rollback=0&show_follower_visibility_disclosure=0" target="_blank" rel="noreferrer" style={styles.socialLink}>
                                    <img src={require('@/assets/xiaojean/C.社群網站的icon/Facebook-white.png')} alt="Facebook" style={styles.icon} />
                                    Facebook
                                </a>
                            </p>
                            <p>
                                <a href="https://www.instagram.com/xiaojean.0128?igshid=YmMyMTA2M2Y%3D" target="_blank" rel="noreferrer" style={styles.socialLink}>
                                    <img src={require('@/assets/xiaojean/C.社群網站的icon/Instagram-white.png')} alt="Instagram" style={styles.icon} />
                                    Instagram
                                </a>
                            </p>
                            <p>
                                <a href="https://reurl.cc/zrE8L7" target="_blank" rel="noreferrer" style={styles.socialLink}>
                                    <img src={require('@/assets/xiaojean/C.社群網站的icon/Marshmallow-white.png')} alt="Marshmallow" style={styles.icon} />
                                    Marshmallow
                                </a>
                            </p>
                        </div>
                        <div style={styles.column}>
                            <p>
                                <a href="https://www.twitch.tv/xiaojean0128" target="_blank" rel="noreferrer" style={styles.socialLink}>
                                    <img src={require('@/assets/xiaojean/C.社群網站的icon/Twitch-white.png')} alt="Twitch" style={styles.icon} />
                                    Twitch
                                </a>
                            </p>
                            <p>
                                <a href="https://twitter.com/xiaojean0128" target="_blank" rel="noreferrer" style={styles.socialLink}>
                                    <img src={require('@/assets/xiaojean/C.社群網站的icon/Twitter-white.png')} alt="Twitter" style={styles.icon} />
                                    Twitter
                                </a>
                            </p>
                            <p>
                                <a href="https://www.youtube.com/@xiaojean0128" target="_blank" rel="noreferrer" style={styles.socialLink}>
                                    <img src={require('@/assets/xiaojean/C.社群網站的icon/Youtube-white.png')} alt="YouTube" style={styles.icon} />
                                    YouTube
                                </a>
                            </p>
                        </div>

                    </div>
                </div>

                {/* Contact Info */}
                <div style={styles.contactUs}>
                    <h4 style={styles.title}>聯絡我們</h4>
                    <p style={styles.contactUsContent}>
                        <img src={require('@/assets/image/email.png')} alt="Email" style={styles.icon} />
                        xiaojean0128@gmail.com
                    </p>
                </div>
            </div>

            {/* Footer Bottom Text */}
            <div style={styles.footerBottom}>
                <p>本站由 龍嘯天 所設計 ・ Powered by React @ 2024</p>
            </div>
        </footer>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    footer: {
        backgroundColor: '#404457',
        color: '#fff',
        padding: '20px 0',
    },
    footerContainer: {
        display: 'flex',
        flexDirection: 'column', // 垂直排列
        justifyContent: 'flex-start',
        alignItems: 'flex-start', // 讓所有內容靠左
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    socialLinks: {
        textAlign: 'left',
        marginBottom: '20px', // 增加一點下方間距
    },
    socialLinksColumns: {
        display: 'flex',
        flexDirection: 'row', // 改為水平方向排列
        flexWrap: 'wrap',     // 允許換行
        gap: '15px',          // 水平間距
    },
    column: {
        display: 'flex',
        flexDirection: 'row',
        gap: '15px', // 水平間距
    },
    socialLink: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
        textDecoration: 'none',
        color: '#fff',
    },
    icon: {
        width: '20px',
        height: '20px',
        marginRight: '8px',
    },
    contactUs: {
        textAlign: 'left', // 靠左對齊
        marginTop: '20px',
    },
    contactUsContent: {
        display: 'flex',
        alignItems: 'center',
    },
    footerBottom: {
        borderTop: '1px solid #ccc',
        paddingTop: '10px',
        marginTop: '20px',
        fontSize: '0.85rem',
        color: '#ccc',
        textAlign: 'center'
    },
    title: {
        marginBottom: '5px'
    },
};

