import React, { useEffect, useState } from 'react';

import FilterBar    from '../components/FilterBar';
import CustomSlider from '../components/CustomSlider';
import MasterCard   from '../components/MasterCard';

export default function MastersList() {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    // TODO: замініть на наш API
    fetch('/api/masters')
      .then(res => res.json())
      .then(data => setMasters(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container my-5">
      {/* 1) Фільтр / пошук */}
      <FilterBar />

      {/* 2) Слайдер під фільтром */}
      <CustomSlider />

      {/* 3) Список майстрів-карток */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-4">
        {masters.map(master => (
          <div key={master.id} className="col">
            <MasterCard master={master} />
          </div>
        ))}
      </div>
    </div>
  );
}
