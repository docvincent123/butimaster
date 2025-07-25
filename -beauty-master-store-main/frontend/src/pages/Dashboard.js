import React, { useEffect, useState } from 'react';
import api from '../api/api';

const Dashboard = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    api.get('/appointments').then(res => setApps(res.data));
  }, []);

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Мій кабінет</h2>
      <ul>
        {apps.map(a => (
          <li key={a._id}>
            Майстер: {a.master.user.name} — {new Date(a.date).toLocaleString()} —{' '}
            {a.paid ? 'Оплачено' : 'Не оплачено'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
