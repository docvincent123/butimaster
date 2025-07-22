import React, { useState } from 'react';
import './HeroSlider.css';

const slides = [
  { id: 1, title: 'Розкішний манікюр у центрі міста', subtitle: 'Професійний догляд за вашими нігтями', img: '/images/slide-manicure.jpg' },
  { id: 2, title: 'Експрес‑педикюр за 45 хвилин', subtitle: 'Насолода та комфорт для ваших ніг', img: '/images/slide-pedicure.jpg' },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((index + slides.length - 1) % slides.length);
  const next = () => setIndex((index + 1) % slides.length);

  return (
    <div className="hero-slider">
      <button className="arrow left" onClick={prev}>‹</button>
      <div className="slide">
        <img src={slides[index].img} alt="" />
        <div className="info">
          <h2>{slides[index].title}</h2>
          <p>{slides[index].subtitle}</p>
          <button>Записатися</button>
        </div>
      </div>
      <button className="arrow right" onClick={next}>›</button>
    </div>
  );
}
