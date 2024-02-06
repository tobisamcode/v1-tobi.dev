import React, { Component, useState } from 'react';
import logo from '../../../assets/svgs/logo.svg';
import { Link } from 'react-router-dom';
import './header.scss';

export default function Header() {
  const [isClosed, setIsClosed] = useState<boolean>(true);

  const toggleMenu = () => setIsClosed(!isClosed);

  return (
    <div id="header">
      <div className="header_wrapper items-center">
        <div className="logo_container">
          <Link to="/" className="flex gap-3 items-center">
            <span className="text-[40px] text-[#888] font-[300]"> {'<'}</span>{' '}
            <div className="font-augustus text-[40px] ">Tobi Adesokan</div>{' '}
            <span className="text-[40px] font-[300] text-[#888]"> {'/>'} </span>
          </Link>
        </div>

        <div className="menu_btn_wrapper">
          <button className={isClosed ? 'menu_btn' : 'menu_btn menu_btn_open'} onClick={toggleMenu}>
            <div className="menu_btn_line"></div>
            <div className="menu_btn_line"></div>
          </button>
        </div>
      </div>

      {!isClosed ? (
        <nav>
          <div className="mobile_menu_container">
            <ul>
              <li>
                <Link to="/" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={toggleMenu}>
                  Projects
                </Link>
              </li>

              <li>
                <Link to="/features" onClick={toggleMenu}>
                  Features
                </Link>
              </li>

              <li>
                <Link to="/resume" onClick={toggleMenu}>
                  Résumé
                </Link>
              </li>

              <li>
                <Link to="/contact" onClick={toggleMenu}>
                  Contact
                </Link>
              </li>
            </ul>

            <div className="social_box">
              <h3>Connect With Me</h3>
              <a className="mt-4" href="mailto: samueloluwatobiloba48@gmail.com">
                Send Email
              </a>
              <div className="social_icons">
                <a href="https://github.com/tobisamcode">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/tobisam100">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.linkedin.com/in/tobiadesokan">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </nav>
      ) : (
        ''
      )}
    </div>
  );
}
