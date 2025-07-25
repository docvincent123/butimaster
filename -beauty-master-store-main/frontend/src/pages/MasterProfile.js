import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';
import { AuthContext } from '../context/AuthContext';

const MasterProfile = () => {
  const { id } = useParams();
  const { token } = useContext(AuthContext);
  const nav = useNavigate();

  const [master, setMaster] = useState(null);
  const [portfolio, setPortfolio] = useState([]);
  const [date, setDate] = useState('');

  useEffect(() => {
    api.get(`/masters/${id}`).then(res => {
      setMaster(res.data.master);
      setPortfolio(res.data.portfolio);
    });
  }, [id]);

  const book = async () => {
    if (!token) return nav('/login');
    const { data } = await api.post('/appointments', {
      masterId: id,
      date
    });
    nav(`/payment/${data._id}`);
  };

  if (!master) return <div>Завантаження…</div>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>{master.user.name}</h2>
      <p>{master.bio}</p>

      <h3>Портфоліо</h3>
      <div style={{ display: 'flex', gap: '1rem' }}>
        {portfolio.map(item => (
          <div key={item._id}>
            <img src={item.imageUrl} alt={item.title} style={{ width: '150px' }} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      <h3>Записатися</h3>
      <input
        type="datetime-local"
        value={date}
        onChange={e => setDate(e.target.value)}
      /><br/>
      <button onClick={book}>Записатися та оплатити</button>
    </div>
  );
};

export default MasterProfile;
