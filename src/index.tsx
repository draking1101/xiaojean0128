import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import reportWebVitals from '@/reportWebVitals';
// Styles
import '@/styles/global.css'
// Components
import { LanguageProvider } from '@/components/LanguageContext';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
// Pages
import { Home } from '@/pages/home';
import { News } from '@/pages/news';
import { Merch } from '@/pages/merch';
import { About } from '@/pages/about';
import { Rule } from '@/pages/rule';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <LanguageProvider>
    <React.StrictMode>
      {/* 全局樣式應用 */}
      <style>
        {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body, #root {
          margin: 0;
          padding: 0;
        }
        `}
      </style>

      <Router>
        <body className='body'>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/merch" element={<Merch />} />
            <Route path="/about" element={<About />} />
            <Route path="/rule" element={<Rule />} />
            <Route path="/news" element={<News />} />
          </Routes>
          <Footer />
        </body>
      </Router>
    </React.StrictMode>
  </LanguageProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
