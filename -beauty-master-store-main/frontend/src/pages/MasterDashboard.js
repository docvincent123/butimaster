import React, { useState, useEffect } from 'react';
import TabLayout    from '../components/TabLayout';
import BookingsList from '../components/BookingsList';

export default function MasterDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  const [bookings, setBookings] = useState([]);
  const [settings, setSettings] = useState({
    bio: '',
    location: '',
    priceList: '',
  });

  useEffect(() => {
    // TODO: завантажити бронювання для майстра
    fetch('/api/master/bookings')
      .then(res => res.json())
      .then(setBookings)
      .catch(console.error);

    // TODO: завантажити налаштування майстра
    fetch('/api/master/profile')
      .then(res => res.json())
      .then(data => setSettings({
        bio: data.bio,
        location: data.location,
        priceList: data.priceList,
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
    console.log('Save master settings', settings);
  };

  const tabs = [
    { eventKey: 'bookings', title: 'Бронювання' },
    { eventKey: 'settings', title: 'Налаштування' },
  ];

  return (
    <div className="container my-5">
      <h2>Кабінет майстра</h2>

      <TabLayout tabs={tabs} activeKey={activeTab} onSelect={setActiveTab} />

      {activeTab === 'bookings' && <BookingsList bookings={bookings} />}

      {activeTab === 'settings' && (
        <form className="mt-3" onSubmit={saveSettings}>
          <div className="mb-3">
            <label className="form-label">Біографія</label>
            <textarea
              name="bio"
              className="form-control"
              rows={3}
              value={settings.bio}
              onChange={handleSettingChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Локація</label>
            <input
              name="location"
              className="form-control"
              value={settings.location}
              onChange={handleSettingChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Прайс-ліст</label>
            <input
              name="priceList"
              className="form-control"
              value={settings.priceList}
              onChange={handleSettingChange}
            />
          </div>
          <button className="btn btn-primary">Зберегти</button>
        </form>
      )}
    </div>
  );
}
