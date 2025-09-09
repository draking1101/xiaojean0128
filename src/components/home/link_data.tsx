/* eslint-disable @typescript-eslint/no-unused-vars */

import { TEXT } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';
// Images
import threads from "@/assets/xiaojean/C.社群網站的icon/threads-white.png";
import twitch from "@/assets/xiaojean/C.社群網站的icon/Twitch-white.png";
import instagram from '@/assets/xiaojean/C.社群網站的icon/Instagram-white.png';
import youtube from '@/assets/xiaojean/C.社群網站的icon/Youtube-white.png';
import twitter from "@/assets/xiaojean/C.社群網站的icon/Twitter-white.png";
import discord from "@/assets/xiaojean/C.社群網站的icon/Discord-white.png";
import facebook from "@/assets/xiaojean/C.社群網站的icon/Facebook-white.png";

export const useLinkData = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].home;

    return [
        {
            href: 'https://www.twitch.tv/xiaojean0128',
            imgSrc: twitch,
            imgAlt: 'Twitch image missing, please contact support',
            title: currentText.section1.linkItem.twitch.title,
            subtitle: currentText.section1.linkItem.twitch.subtitle,
        },
        {
            href: 'https://www.youtube.com/@xiaojean0128',
            imgSrc: youtube,
            imgAlt: 'YouTube image missing, please contact support',
            title: currentText.section1.linkItem.youtube.title,
            subtitle: currentText.section1.linkItem.youtube.subtitle,
        },
        {
            href: 'https://discord.gg/wyCzz4MJnh',
            imgSrc: discord,
            imgAlt: 'Discord image missing, please contact support',
            title: currentText.section1.linkItem.discord.title,
            subtitle: currentText.section1.linkItem.discord.subtitle,
        },
        {
            href: 'https://www.instagram.com/xiaojean0128/',
            imgSrc: instagram,
            imgAlt: 'Instagram image missing, please contact support',
            title: currentText.section1.linkItem.instagram.title,
            subtitle: currentText.section1.linkItem.instagram.subtitle,
        },
        {
            href: 'https://www.threads.com/@xiaojean0128',
            imgSrc: threads,
            imgAlt: 'Threads image missing, please contact support',
            title: currentText.section1.linkItem.threads.title,
            subtitle: currentText.section1.linkItem.threads.subtitle,
        },
        // {
        //     href: 'https://x.com/xiaojean0128',
        //     imgSrc: twitter,
        //     imgAlt: 'Twitter image missing, please contact support',
        //     title: currentText.section1.linkItem.twitter.title,
        //     subtitle: currentText.section1.linkItem.twitter.subtitle,
        // },
        // {
        //     href: 'https://www.facebook.com/share/1EbdYiBftm/?mibextid=wwXIfr',
        //     imgSrc: facebook,
        //     imgAlt: 'Facebook image missing, please contact support',
        //     title: currentText.section1.linkItem.facebook.title,
        //     subtitle: currentText.section1.linkItem.facebook.subtitle,
        // },
    ];
};
