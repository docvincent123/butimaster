import React, { useEffect, useState } from 'react';
import api from '../api';
import ServiceCard from './ServiceCard';

export default function ServiceList({ title, endpoint, showDetails }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState(null);

  useEffect(() => {
    api.get(endpoint)
      .then(res => setServices(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [endpoint]);

  if (loading) return <p>Завантаження...</p>;
  if (error)   return <p>Помилка: {error}</p>;

  return (
    <section className="service-list">
      <h3>{title}</h3>
      <div className="grid">
        {services.map(s => (
          <ServiceCard key={s.id} service={s} showDetails={showDetails} />
        ))}
      </div>
    </section>
  );
}
