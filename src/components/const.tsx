// 網站資訊
import packageJson from "../../package.json";

// 變數
const version = packageJson.version;

export const WEB_DETAILS = {
    version: `Ver.${version}` // 網站版本
}

export const links = {
    home: {
        cheapServer: {
            discord: 'https://discord.com/invite/cheapserver',
            website: 'https://cheapserver.fun/xiaojean',
        }
    },
    merch: {
        co_branding_Tshirt: {
            birthday2025_short: 'https://www.50off.tw/pitem/M00062029',
            birthday2025_long: 'https://www.50off.tw/pitem/M00062028',
        },
        lineSitcker: 'https://store.line.me/stickershop/product/25838548/zh-Hant?utm_source=gnsh_stickerDetail',
        lineSticer_2: "https://store.line.me/stickershop/product/30237154/zh-Hant?from=sticker",
        lineEmoji: "https://store.line.me/emojishop/product/65d99d86357e3d15ccfcf4be/zh-Hant?lang=zh-Hant&utm_source=gnsh_sticonDetail",
    }
}

export const images = {
    merch: {
        default: require('@/assets/xiaojean/A.無分類/010-揮金如土.png'),
    },
    design: {
        historyDesign: {
            "0.0": require('@/assets/xiaojean/F.形象圖/A00.png'),
            "1.0&2.0": require('@/assets/xiaojean/F.形象圖/1.0&2.0.jpg'),
        }
    }
}

const newsDetails = {
    category: {
        1: 'All',
        2: 'Activity',
        3: 'Announce',
    },
    date: {
        id0: '2024/10/27',
        id1: '2024/11/7',
    },
    demoImage: {
        id0: require('@/assets/xiaojean/A.無分類/011-坐牢靜.png'),
        id1: require('@/assets/xiaojean/A.無分類/012-我才.png'),
    }
}
export const TEXT = {
    en: {
        header: {
            logoText: "XiaoJean",
            home: 'Home',
            news: 'News',
            merch: 'Merch',
            about: 'About',
            rule: 'Rules',
            design: "Design",
            commission: "Commission",
        },
        home: {
            banner: {
                bannerTitle1: "Hi! I'm XiaoJean ～",
                bannerTitle2: "I loves drawing, singing, and gaming.",
                bannerTitle3: "My simple wish is to bring you lots of happiness.",
                bannerTitle4: "Feel free to scroll down to learn more about me ♡",
                buttonText: "《Go to Vtuber Self Intro》",
            },
            section1: {
                linkItem: {
                    twitch: {
                        title: 'Twitch',
                        subtitle: 'Regular Streams, Event Stories',
                    },
                    youtube: {
                        title: 'Youtube',
                        subtitle: 'Live Videos, Song Covers',
                    },
                    twitter: {
                        title: 'Twitter',
                        subtitle: 'Thanks Post, Daily Post',
                    },
                    threads: {
                        title: 'Threads',
                        subtitle: 'Thoughts, Casual Posts',
                    },
                    instagram: {
                        title: 'Instagram',
                        subtitle: 'Highlight Clips, Daily Post',
                    },
                    facebook: {
                        title: 'Facebook',
                        subtitle: 'Artwork, Event Posts',
                    },
                    discord: {
                        title: 'Discord',
                        subtitle: 'Daily chats and interactions with the community',
                    },
                }
            },
            tear: {
                1: "This is my fan mascot, XinJie.",
                2: "The abbreviation is the same as my name, XJ.",
                3: "The symbol on its belly represents my Aquarius sign.",
                4: "It's often teary-eyed because of the 'heart ties' I have with everyone and my tendency to cry.",
                5: "So, it combines a teardrop with elements of a heart tie.",
            },
            section2: {
                donate: "Donate",
                item3: "List of Past Donation Gifts.",
                Link1: "Valleydeer",
                Link2: "Hivebee",
            },
            section3: {
                linkText: "Discord Group",
                line1: "This is the sponsor for our member-exclusive Minecraft server.",
                line2: "If you need to rent a server, feel free to check them out.",
                line3A: `If you have any questions, you can ask in their`,
                line3B: '.',
                line4: "Use my discount code 'xiaojean' to get 5% off!",
                line5: 'Read More',
            },

        },
        news: {
            newsBody: {
                title: 'Latest News',
                category: {
                    all: newsDetails.category[1],
                    activity: newsDetails.category[2],
                    announcement: newsDetails.category[3],
                },
                noNews: 'No news yet.',
            }
            , newsItem: [
                // {
                //     id: "0",
                //     category: newsDetails.category[3],
                //     demoImage: newsDetails.demoImage.id0,
                //     title: "About Extended Streaming Hours",
                //     description: "I’ve been putting in a lot of effort to rank up in the Extraordinary Journey but due to time constraints...",
                //     date: newsDetails.date.id0,
                //     content: "I’ve been putting in a lot of effort to rank up in the Extraordinary Journey but due to time constraints, the pressure is intense. If I can't achieve my goal by the end of Act 9, this series might come to the end ( I’ll still be ranking, just not as intensively).",
                //     content2: "However, I'll continue to work hard on my youtube channel with stream highlights, shorts, covers, and similar content.",
                //     content3: "So… if you haven’t watched the latest episode, go check it out! I need your support and love. Love you all!",
                //     linkText: "Click Me to Extraordinary Journey",
                // },
            ]
        },
        merch: {
            category: {
                limited: "Limited",
                regular: "Regular",
                discontinued: "Discontinued",
            },
            title: {
                commingSoon: '《Coming Soon》',
                lineSticker: "Line Stickers",
                merchShop: "Merch Shop",
            },
            link: {
                commingSoon: '《Coming Soon》',
                default: '《See More Details》',

            }
        },
        about: {
            basicInfo: {
                title: 'XiaoJean',
                category: "Basic Information",
                height: 'Height：158',
                birthday: 'Birthday: 1/28',
                favoriteFood: 'Favorite Food: Curry',
                hobby: 'Hobbies: Singing, drawing, gaming',
                favoriteGame: 'Games: Mainly Valorant, occasionally trying other games',
                notice1: '💌 xiaojean0128@gmail.com',
            },
            milestone: {
                1: "2022.09.13 Started Streaming ✓",
                2: "2022.09.22 Streaming Affiliate ✓",
                3: "2022.09.26 100 Followers ✓",
                4: "2023.01.28 First Driving Stream / Level 4 Vehicle",
                5: "2023.02.08 1000 Followers ✓",
                6: "2023.11.27 1000 Subscribers ✓ Special thanks to Xizhu ♥",
                7: "2024.01.28 Vtuber Debut Stream / Level 16 Vehicle",
                8: "2024.07.30 Twitch Partners ✓",
            },
            derivativeWork: {
                1: "Any character illustration may be used for commissions or fan art.",
                2: "Use of images for profit or feeding into AI is prohibited.",
                3: "• No R18 content; R16 borderline content is acceptable.",
            },
        },
        design: {
            derivativeWork: {
                title: 'Fan Art & Commission Rules',
                item0: 'The hair has blue highlights. The face has blue X and pink J.',
                item1: 'Any character illustrations can be used for commissions or fan art.',
                item2: 'Use of images for profit or feeding into AI is prohibited.',
                item3: 'No R18 content; borderline R16 content is acceptable.',
            },
            historyDesign: {
                title: 'Character Design Showcase',
                item1: 'Version 0.0',
                item2: 'Version 1.0 & 2.0',
            },
        },
        footer: {
            text: `This website was designed by Xiaotian ${WEB_DETAILS.version} ・ Powered by React @ 2025`,
        }
    },
    zh: {
        header: {
            logoText: "小靜しずか",
            home: '首頁',
            news: '最新消息',
            merch: '周邊',
            about: '關於我',
            rule: '粉絲守則',
            design: "形象展示",
            commission: "委託相關",
        },
        home: {
            banner: {
                bannerTitle1: "嗨嗨！我是小靜しずか ～",
                bannerTitle2: "一個愛畫畫.唱歌.玩遊戲的普通人",
                bannerTitle3: "簡單的心願是想帶給你們許多快樂",
                bannerTitle4: '歡迎下滑了解更多關於我的事 ♡',
                buttonText: '《前往VT一問一答》',
            },
            section1: {
                linkItem: {
                    twitch: {
                        title: 'Twitch',
                        subtitle: '常駐直播、活動限動',
                    },
                    youtube: {
                        title: 'Youtube',
                        subtitle: '直播影片、歌曲翻唱',
                    },
                    twitter: {
                        title: 'Twitter',
                        subtitle: '感謝貼文、日常貼文',
                    },
                    threads: {
                        title: 'Threads',
                        subtitle: '想說的話、日常廢文',
                    },
                    instagram: {
                        title: 'Instagram',
                        subtitle: '精華短片、日常限動',
                    },
                    facebook: {
                        title: 'Facebook',
                        subtitle: '繪圖作品、活動貼文',
                    },
                    discord: {
                        title: 'Discord',
                        subtitle: '心結幫日常聊天互動',
                    }
                }
            },
            tear: {
                1: "這是我的粉絲形象心結",
                2: "縮寫跟我的名字XJ一樣",
                3: "肚子上是我的星座水瓶符號",
                4: "因為常常跟大家心結又愛哭",
                5: "所以是淚滴加上心結的元素",
            },
            section2: {
                donate: "斗內",
                item3: "歷史斗內贈禮名單",
                Link1: "山羌斗內",
                Link2: "Hivebee",
            },
            section3: {
                linkText: "DC群",
                line1: '這是我們會員麥塊伺服器的贊助商',
                line2: '如果有需要租伺服器的話可以參考看看',
                line3A: `有問題也可以在他們的`,
                line3B: `詢問`,
                line4: '使用我的優惠碼 xiaojean 還能打95折喔!',
                line5: '了解更多',
            },
        },
        news: {
            newsBody: {
                title: '最新消息',
                category: {
                    all: '所有',
                    activity: '活動',
                    announcement: '公告',
                },
                noNews: '目前沒有任何消息',
            },
            newsItem: [
                // 範本
                // {
                //     id: "0",
                //     category: newsDetails.category[3],
                //     demoImage: newsDetails.demoImage.id0,
                //     title: "關於直播加班時間",
                //     description: "近期因為超凡之旅爬得很坐牢，加上10月私下爬分時的設定沒調整好...",
                //     date: newsDetails.date.id0,
                //     content: "近期因為超凡之旅爬得很坐牢，加上10月私下爬分時的設定沒調整好，以至於那段時間的素材都不能用很可惜，所以這系列結束前需要多花點時間在爬分(結束時會再另外做影片跟各位報告!)",
                //     content2: "平日不太開假日則盡量開4小時的台，除非臨時有事或身體不適會再提前告知，上班時會減少出現在群組的時間(上班時間為平日早八晚五有1小時午休)",
                //     content3: "下班後有機會出現在會員語音聊聊天，還有承諾各位加班倒數完前不會主動找聯動，將會把加班時間拿來陪大家聊天玩遊戲~",
                //     linkText: "點我前往超凡之旅",
                // },
            ]
        },
        merch: {
            category: {
                limited: "限時周邊",
                regular: "常駐周邊",
                discontinued: "絕版周邊",
            },
            title: {
                commingSoon: '敬請期待',
                lineSticker: "Line貼圖",
                merchShop: "心結小舖",
            },
            link: {
                commingSoon: '《敬請期待》',
                default: '《點擊前往》',
            }
        },
        about: {
            basicInfo: {
                title: '小靜しずか',
                category: "基本資料",
                height: '身高：158',
                birthday: '生日：1/28',
                favoriteFood: '最愛的食物：咖哩',
                hobby: '興趣：唱歌畫畫玩遊戲',
                favoriteGame: '遊戲：特戰為主，偶爾嘗試其他遊戲',
                notice1: '💌 xiaojean0128@gmail.com',
            },
            milestone: {
                1: "2022.09.13 開始實況✓",
                2: "2022.09.22 實況盟友✓",
                3: "2022.09.26 100追隨✓",
                4: "2023.01.28 第1次開車/車車4級",
                5: "2023.02.08 1000追隨✓",
                6: "2023.11.27 1000訂閱✓特別感謝惜竹♥",
                7: "2024.01.28 V皮初配信/車車16級",
                8: "2024.07.30 合作夥伴✓",
            },
            derivativeWork: {
                1: "可使用任何形象立繪委託或二創",
                2: "禁止將圖拿來盈利或投餵AI使用",
                3: "禁止R18創作，R16擦邊圖可接受",
            },
        },
        design: {
            derivativeWork: {
                title: '二創委託規則',
                item0: '瀏海有藍色挑染.臉上有藍X&粉J',
                item1: '可使用任何形象立繪委託或二創',
                item2: '禁止將圖拿來盈利或投餵AI使用',
                item3: '禁止R18創作，R16擦邊圖可接受',
            },
            historyDesign: {
                title: '歷代立繪展示',
                item1: '0.0版',
                item2: '1.0 & 2.0版',
            },
        },
        footer: {
            text: `本站由 龍嘯天 所設計 ${WEB_DETAILS.version} ・ Powered by React @ 2025`
        }
    },
};
