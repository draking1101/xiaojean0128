import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Images
import logo from "@/assets/header/favicon.png"  // Logo
// Styles
import '@/styles/header.css';  // 導入CSS
// Components
import { TEXT } from '@/components/const'
import { SwtichLanguageButton } from '@/components/switch_language_button';
import { useLanguage } from '@/components/LanguageContext';

export const Header = () => {
    const { language, changeLanguage } = useLanguage();
    const currentText = TEXT[language].header;
    const [openMenu, setOpenMenu] = useState(false); // 漢堡選單狀態

    useEffect(() => {
        // 當視窗寬度低於720px時，如果關閉漢堡選單在將視窗寬度恢復到 > 720px 會發生 導覽列消失的狀況
        // 因此添加監聽器監控寬度變化，當 > 720px 恢復顯示導覽列
        const handleResize = () => {
            const headerbody = document.getElementById("header-body")
            const navList = document.getElementById("nav-list")
            if (window.innerWidth >= 720) {
                navList.style.display = "flex";
                headerbody.style.height = "70px"
                setOpenMenu(false)
            } else {
                navList.style.display = "none";
            };
        };

        handleResize();

        // 添加視窗大小監聽器
        window.addEventListener("resize", handleResize);

        // 在組件卸載後，清除監聽器
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // 開關漢堡選單
    function toggleMenu() {
        if (window.innerWidth < 1024) {
            const headerbody = document.getElementById("header-body")
            const navList = document.getElementById("nav-list")
            const links = document.querySelectorAll('.nav-link');

            if (!openMenu) {
                // 開啟選單時執行
                headerbody.style.height = "100%"
                navList.style.display = "flex"
                // 導覽列動畫
                links.forEach((link, index) => {
                    setTimeout(() => {
                        link.classList.add('show');
                    }, index * 100); // 每個 Link 延遲 100ms 顯示
                });
            } else {
                // 關閉選單時執行
                headerbody.style.height = "70px"
                navList.style.display = "none"
                // 重置導覽列動畫
                links.forEach(link => link.classList.remove('show'));
            }
            setOpenMenu(!openMenu);
        } else {
            scrollToTop();
        }
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // 回到頁首
    }

    function scrollTopAfterNav() {
        toggleMenu();
        scrollToTop();
    }

    return (
        <header id='header-body'>
            {/* 漢堡選單 */}
            <div id="burger-menu-button" onClick={toggleMenu}>
                <div>{(openMenu === true) ? "✖︎" : "☰"}</div>
            </div>
            {/* LOGO 部分 */}
            <div className='logoContainer' onClick={scrollToTop}>
                <Link to="/" className='logo-link'>
                    <img src={logo} alt="Logo" className='header-logo' />
                    <span className='header-logo-text'>{currentText.logoText}</span>
                </Link>
                {/* <text className='beta-text'>Beta</text> */}
            </div>

            {/* 導航欄 */}
            <nav id='nav' className='nav'>
                <ul id='nav-list'>
                    <li onClick={scrollTopAfterNav}>
                        <Link to="/" className='nav-link'>{currentText.home}</Link>
                    </li>
                    <li onClick={scrollTopAfterNav}>
                        <Link to="/news" className='nav-link'>{currentText.news}</Link>
                    </li>
                    <li onClick={scrollTopAfterNav}>
                        <Link to="/merch" className='nav-link'>{currentText.merch}</Link>
                    </li>
                    <li onClick={scrollTopAfterNav}>
                        <Link to="/design" className='nav-link'>{currentText.design}</Link>
                    </li>
                    <li onClick={scrollTopAfterNav}>
                        <Link to="/commission" className='nav-link'>{currentText.commission}</Link>
                    </li>
                </ul>
            </nav>

            {/* 切換語言按鈕 */}
            <SwtichLanguageButton
                language={language}
                onClick={changeLanguage}
            />
        </header>
    );
};
