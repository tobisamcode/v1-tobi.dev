import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import logo from './assets/svgs/m-imyke.svg';
import Base from './components/Base/base';
import Mobile from './components/Base/mobile';
import Contact from './components/Contact/contact';
import Error from './components/Error/error404';
import Projects from './components/Projects/projects';
import Resume from './components/Resume/resume';
import Header from './components/Utils/Header/header';
import PercentageLoader from './components/PercentageLoader/PercentageLoader';

function App() {
  const [menu, setMenu] = useState<string[]>(['active_menu', '', '']);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const activeMenu = (id: number) => {
    switch (id) {
      case 0:
        setMenu(() => ['active_menu', '', '']);
        break;

      case 1:
        setMenu(() => ['', 'active_menu', '']);
        break;

      case 2:
        setMenu(() => ['', '', 'active_menu']);
        break;

      default:
        break;
    }
  };

  return (
    <div className="App">
      {isLoading ? (
        <div className="flex flex-col justify-center  items-center  h-full w-full">
          <div className="font-augustus text-[40px] "> {'<Tobi Adesokan/>'}</div>
          <p className="font-mono w-[80%] text-center text-[#888888] ">
            ... crafting experiences, One line of a code at a time
          </p>
          <PercentageLoader />
        </div>
      ) : (
        <BrowserRouter>
          <div className="mobile_container">
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<Mobile menu={menu} />} />
                <Route path="/resume" element={<Resume menu={menu} activeMenu={activeMenu} />} />
                <Route path="/projects" element={<Projects menu={menu} activeMenu={activeMenu} />} />
                <Route path="/contact" element={<Contact menu={menu} activeMenu={activeMenu} />} />
                <Route element={<Error />} />
              </Routes>
            </div>
            <div className="social_buttons">
              <a href="https://github.com/tobisamcode" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://twitter.com/tobisam100" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/tobiadesokan/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="app-container">
            <div className="m-fixed">
              <Base menu={menu} />
            </div>
            <div className="main">
              <div className="pages_container">
                <Routes>
                  <Route path="/" element={<Resume menu={menu} activeMenu={activeMenu} />} />
                  <Route path="/resume" element={<Resume menu={menu} activeMenu={activeMenu} />} />
                  <Route path="/projects" element={<Projects menu={menu} activeMenu={activeMenu} />} />
                  <Route path="/contact" element={<Contact menu={menu} activeMenu={activeMenu} />} />
                  <Route element={<Error />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
