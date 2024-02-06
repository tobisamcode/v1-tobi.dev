import React from 'react';
import './feature.scss';
import img1 from '../../../assets/imgs/f-1.png';
import img from '../../../assets/imgs/f-2.png';
import { truncateText } from '~/utils/fx';
import { Link } from 'react-router-dom';
interface Feature {
  id: string;
  title: string;
  sub_title: string;
  date: string;
  img: string;
  link: string;
}

export const Feature = (props: Feature) => {
  const { date, img, sub_title, title, link } = props;

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="feat_box">
      <h1 className="title">{title}</h1>
      <p className="sub_title">{truncateText(sub_title, 40)}</p>
      <p className="date">{date}</p>
      <div className="img_box">
        <img src={img} alt="featured_img" />
      </div>
    </a>
  );
};
