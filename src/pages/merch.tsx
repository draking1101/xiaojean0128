import React, { useState } from 'react';
// Styles
import '@/styles/merch.css';
// Components
import { images, TEXT } from '@/components/const';
import { useLanguage } from '@/components/LanguageContext';
// Interface
import { MerchItemProps } from '@/components/interface';

export const Merch = () => {
    const { language } = useLanguage();
    const currentText = TEXT[language].merch;
    const defaultImg = images.merch.default

    // 新增狀態來控制模態框的顯示
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const merchCategory = [currentText.category.limited, currentText.category.regular, currentText.category.discontinued]

    const MerchItem = [
        // {
        //     // 2026 生日周邊
        //     id: 13,
        //     category: currentText.category.limited,
        //     showLink: false,
        //     imgSrc: require('@/assets/xiaojean/B.周邊/lineSticker.png'), // // 生日後再放上圖片
        //     title: currentText.title.birthday2026,
        //     link: "https://store.line.me/stickershop/author/4563761/zh-Hant" // 生日後再放上連結
        // },
        {
            // Line個人原創商品
            id: 6,
            category: currentText.category.regular,
            showLink: true,
            imgSrc: require('@/assets/xiaojean/B.周邊/lineSticker.png'),
            title: currentText.title.lineSticker,
            link: "https://store.line.me/stickershop/author/4563761/zh-Hant"
        }, {
            // 小靜的心結小舖
            id: 12,
            category: currentText.category.regular,
            showLink: true,
            imgSrc: require('@/assets/xiaojean/B.周邊/merchShop.jpg'),
            title: currentText.title.merchShop,
            link: "https://kusdom.com/xiaojean0128"
        }]

    const openModal = (imageSrc) => {
        setModalImage(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const MerchContainer = ({
        category
    }) => {
        return (
            <div className="merch-area">
                <h1 className='merch-area-title'>{category}</h1>
                <ul className='merch-item-container'>
                    {MerchItem
                        .filter((item) => item.category === category)
                        .sort((a, b) => a.id - b.id)
                        .map((item) => (
                            <MerhcItem
                                key={item.id}
                                id={item.id}
                                category={item.category}
                                showLink={item.showLink}
                                imgSrc={item.imgSrc}
                                title={item.title}
                                link={item.link}
                            />
                        ))}
                    {/* 如果限時周邊沒商品時顯示 */}
                    {category === currentText.category.limited && MerchItem.filter((item) => item.category === currentText.category.limited).length === 0 && (
                        <li className='merch-item'>
                            <img src={defaultImg} alt="Lost" />
                            <p className="merch-item-title">{currentText.title.commingSoon}</p>
                            <button onClick={() => openModal(defaultImg)}>{language === 'zh' ? '檢視圖片' : 'View Image'}</button>
                        </li>
                    )}
                    {/* 如果絕版類別沒商品時顯示 */}
                    {category === currentText.category.discontinued && MerchItem.filter((item) => item.category === currentText.category.discontinued).length === 0 && (
                        <li className='merch-item'>
                            <img src={require('@/assets/xiaojean/B.周邊/limited_merch.jpeg')} alt="Lost" />
                            <p className="merch-item-title">{language === 'zh' ? '商品資訊放在IG' : 'Information about discontinued products is placed on IG'}</p>
                            <button onClick={() => openModal(defaultImg)}>{language === 'zh' ? '檢視圖片' : 'View Image'}</button>
                            <a
                                className='merch-item-link'
                                href={'https://www.instagram.com/xiaojean0128/'}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {language === 'zh' ? '《前往IG》' : '《Go to Instagram》'}
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        )
    };

    const MerhcItem = ({
        showLink,
        imgSrc,
        title,
        link
    }: MerchItemProps) => {
        return (
            <li className='merch-item'>
                <img src={imgSrc} alt="Lost" />
                <p className="merch-item-title">{title}</p>
                <button onClick={() => openModal(imgSrc || defaultImg)}>{language === 'zh' ? '檢視圖片' : 'View Image'}</button>
                {showLink && (
                    <a className='merch-item-link' href={link} target="_blank" rel="noreferrer">
                        {currentText.link.default}
                    </a>
                )}
            </li>
        )
    }

    return (
        <div className="page-body">
            <div className="merch-body">
                {merchCategory.map((category) => (
                    <MerchContainer key={category} category={category} />
                ))}
            </div>

            {/* 模態框 */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <img src={modalImage} alt="Modal View" style={{ width: '100%', height: '100%' }} />
                        <span className="close" onClick={closeModal}>&times;</span>
                    </div>
                </div>
            )}
        </div >

    )
}
