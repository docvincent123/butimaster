// src/pages/ClientDashboard.js
import React, { useState, useEffect } from 'react';
import TabLayout    from '../components/TabLayout';
import BookingsList from '../components/BookingsList';

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [settings, setSettings] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    // TODO: завантажити бронювання клієнта
    fetch('/api/client/bookings')
      .then(res => res.json())
      .then(setBookings)
      .catch(console.error);

    // TODO: завантажити налаштування клієнта
    fetch('/api/client/profile')
      .then(res => res.json())
      .then(data => setSettings({
        name: data.name,
        email: data.email,
        phone: data.phone,
      }))
      .catch(console.error);
  }, []);

  const handleSettingChange = e => {
    const { name, value } = e.target;
    setSettings(s => ({ ...s, [name]: value }));
  };
  const saveSettings = e => {
    e.preventDefault();
    // TODO: відправити зміни на сервер
    console.log('Save client settings', settings);
  };

  const tabs = [
    { eventKey: 'bookings', title: 'Бронювання' },
    { eventKey: 'settings', title: 'Налаштування' },
  ];

  return (
    <div className="container my-5">
      <h2>Ваш кабінет</h2>

      <TabLayout tabs={tabs} activeKey={activeTab} onSelect={setActiveTab} />

      {activeTab === 'bookings' && <BookingsList bookings={bookings} />}

      {activeTab === 'settings' && (
        <form className="mt-3" onSubmit={saveSettings}>
          <div className="mb-3">
            <label className="form-label">Ім’я</label>
            <input
              name="name"
              className="form-control"
              value={settings.name}
              onChange={handleSettingChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              value={settings.email}
              onChange={handleSettingChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Телефон</label>
            <input
              name="phone"
              className="form-control"
              value={settings.phone}
              onChange={handleSettingChange}
            />
          </div>
          <button className="btn btn-primary">Зберегти</button>
        </form>
      )}
    </div>
  );
}
