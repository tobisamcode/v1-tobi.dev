import React from 'react';
import { Link } from 'react-router-dom';
import myPic from '../../assets/imgs/my-pic.jpg';
import myHeadshot from '../../assets/imgs/headshot.png';
import arrow from '../../assets/svgs/arrow.svg';
import navLine from '../../assets/svgs/menu-line.svg';
import './base.scss';

export default function Base({ menu }: any) {
  return (
    <div className="base_container">
      <div className="hero">
        <div className="intro_box">
          <h1>
            Hello! 👋🏻 I'm <br /> Tobi Adesokan.
          </h1>
          <div className="my-pic">
            <div className="gradient"></div>
            <img className="" src={myHeadshot} alt="my-avatar" />
          </div>
        </div>

        <div className="description">
          <p>
            <span>
              I'm a <span className="highlight">Software Engineer 🧑🏻‍💻</span> and{' '}
              <span className="highlight">a recent graduate in Mathematics 👨🏻‍🎓</span> with a keen enthusiasm for
              problem-solving. I possess a solid understanding of computer science principles and have demonstrated
              success in delivering code that is both high-quality and scalable.
            </span>
          </p>
        </div>

        <div className="go_button_container">
          <Link to="/projects">
            <button className="explore">Explore ➜</button>
          </Link>
        </div>
      </div>

      <nav>
        <ul>
          <li className={menu[0]}>
            <small>
              00
              <Link to="/resume">
                <img src={navLine} alt="menu bullet" /> RESUME
              </Link>
            </small>
          </li>

          <li className={menu[1]}>
            <small>
              01
              <Link to="/projects">
                <img src={navLine} alt="menu bullet" /> PROJECTS
              </Link>
            </small>
          </li>
        </ul>
      </nav>

      <div className="footer">
        <div className="container">
          <div className="gradient"></div>
          <img src={myHeadshot} alt="" />
        </div>

        <div className="social">
          <a href="https://github.com/tobisamcode" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> Github
            <img src={arrow} alt="pointer" />
          </a>

          <a href="https://twitter.com/tobisam100" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i> Twitter <img src={arrow} alt="pointer" />
          </a>

          <a href="https://www.linkedin.com/in/tobiadesokan/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i> LinkedIn <img src={arrow} alt="pointer" />
          </a>
        </div>
      </div>
    </div>
  );
}
