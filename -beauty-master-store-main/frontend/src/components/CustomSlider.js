import React, { useState, useEffect } from 'react';
import { AiOutlineLeft, AiOutlineRight, AiOutlinePlus } from 'react-icons/ai';

export default function CustomSlider({ slides = [], allowUpload = false, onUpload }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIdx(i => (i + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prev = () => setIdx(i => (i - 1 + slides.length) % slides.length);
  const next = () => setIdx(i => (i + 1) % slides.length);

  return (
    <div className="position-relative my-3">
      {slides.length > 0 ? (
        <img
          src={slides[idx].img}
          alt={slides[idx].title}
          className="w-100 rounded shadow-sm"
          style={{ height: '300px', objectFit: 'cover' }}
        />
      ) : (
        <div className="w-100 rounded bg-light d-flex align-items-center justify-content-center" style={{ height: '300px' }}>
          Немає фото
        </div>
      )}

      {/* Завантажити фото */}
      {allowUpload && (
        <label className="position-absolute top-0 end-0 m-3 btn btn-sm btn-outline-secondary">
          <AiOutlinePlus /> Додати фото
          <input type="file" accept="image/*" hidden onChange={onUpload} />
        </label>
      )}

      {/* Стрілки */}
      {slides.length > 1 && (
        <>
          <button onClick={prev} className="btn btn-light position-absolute top-50 start-0 translate-middle-y">
            <AiOutlineLeft />
          </button>
          <button onClick={next} className="btn btn-light position-absolute top-50 end-0 translate-middle-y">
            <AiOutlineRight />
          </button>
        </>
      )}
    </div>
  );
}