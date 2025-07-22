import React, { useState, useEffect } from 'react';
import api from '../api';

export default function BookingForm() {
  const [services, setServices] = useState([]);
  const [form, setForm] = useState({
    serviceId: '',
    date: '',
    time: ''
  });
  const [status, setStatus] = useState(null);

  useEffect(() => {
    // Підтягуємо список процедур для селекту
    api.get('/services/popular')
      .then(({ data }) => setServices(data))
      .catch(console.error);
  }, []);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('sending');
    try {
      await api.post('/bookings', form);
      setStatus('success');
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="form-block">
        <h4>Процедура</h4>
        <select name="serviceId" onChange={handleChange} required>
          <option value="">Виберіть послугу</option>
          {services.map(s => (
            <option key={s.id} value={s.id}>
              {s.name} ({s.category})
            </option>
          ))}
        </select>
      </div>
      <div className="form-block">
        <h4>Дата</h4>
        <input name="date" type="date" onChange={handleChange} required />
      </div>
      <div className="form-block">
        <h4>Час</h4>
        <input name="time" type="time" onChange={handleChange} required />
      </div>
      <button type="submit" className="book-btn">
        {status === 'sending' ? 'Надсилаємо...' : 'Знайти майстра'}
      </button>
      {status === 'success' && <p className="success">Запис створено!</p>}
      {status === 'error'   && <p className="error">Помилка. Спробуйте ще.</p>}
    </form>
  );
}
