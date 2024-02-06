import React, { useEffect } from 'react';
import Helmet from '../Utils/SEO/helmet';
import { v4 as uuid } from 'uuid';
import { Feature } from '../Utils/Feature/feature';
import img1 from '../../assets/imgs/f-1.png';
import img2 from '../../assets/imgs/f-2.png';
import img3 from '../../assets/imgs/f-3.png';
import img4 from '../../assets/imgs/f-4.png';
import './features.scss';
import { Link } from 'react-router-dom';

type Prop = {
  menu?: string[];
  activeMenu: (arg: number) => void;
};

interface Feature {
  id: string;
  title: string;
  sub_title: string;
  date: string;
  img: string;
  link: string;
}

const Features_Data: Feature[] = [
  {
    id: uuid(),
    title: 'Facebook - Legit.ng',
    sub_title: 'Young man gets first class from UNILAG',
    date: 'jan 26, 2024',
    img: img1,
    link:
      'https://web.facebook.com/legitngnews/posts/pfbid02d9onyG5hdFTifQ2UzDxzy3eqrjf9y2ZWB1T5f4tBcwLSqFBnDxavietHoMxXPLJul',
  },

  {
    id: uuid(),
    title: 'Legit.ng',
    sub_title: 'Tobi Adesokan: Student Makes First Class in Pure Mathematics, Graduates from University of Lagos',
    date: 'jan 25, 2024',
    img: img2,
    link:
      'https://www.legit.ng/people/1575378-big-achievement-student-class-pure-mathematics-graduates-university-lagos/?utm_source=Facebook&utm_medium=pp&utm_campaign=pp&fbclid=IwAR2LFLjXAzHe9alr6qCH37INfZJTuUpmDXBvIhQvfz4gVsEP8GT_biCzNNQ',
  },

  {
    id: uuid(),
    title: 'Scholarship Region',
    sub_title:
      'Despite working as a full-time Software Engineer while studying, young man bags first-class degree in Mathematics',
    date: 'jan 24, 2024',
    img: img3,
    link:
      'https://www.scholarshipregion.com/despite-working-as-a-full-time-software-engineer-while-studying-young-man-bags-first-class-degree-in-mathematics/',
  },

  {
    id: uuid(),
    title: 'LinkedIn',
    sub_title: 'First Class Honors in Mathematics! 🏆 ',
    date: 'jan 18, 2024',
    img: img4,
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:7153639739177213952/',
  },
];

export default function Features(props: Prop) {
  useEffect(() => {
    props.activeMenu(2);
  }, []);
  return (
    <div>
      <Helmet title="My Features" name="Selected Features" content="Selected Tobi Adesokan's Features" />
      <div className="feature_showcase">
        {Features_Data.map((feature) => (
          <Feature key={feature.id} {...feature} />
        ))}
      </div>

      <div className="go_button_container">
        <Link to="/">
          <button>
            <b>➜ </b> Home
          </button>
        </Link>
        <Link to="/resume">
          <button>Résumé ➜ </button>
        </Link>
      </div>
    </div>
  );
}
