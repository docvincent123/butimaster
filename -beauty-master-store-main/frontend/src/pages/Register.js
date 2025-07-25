import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
  const { register } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isMaster, setIsMaster] = useState(false);
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await register(name, email, password, isMaster);
    nav('/login');
  };

  return (
    <form onSubmit={submit} style={{ maxWidth: '400px', margin: '2rem auto' }}>
      <h2>Реєстрація</h2>
      <input
        type="text"
        placeholder="Ім’я"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      /><br/>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      /><br/>
      <input
        type="password"
        placeholder="Пароль"
        value={password}
        onChange={e => setPassword(e.target.value)}
        required
      /><br/>
      <label>
        <input
          type="checkbox"
          checked={isMaster}
          onChange={e => setIsMaster(e.target.checked)}
        /> Я майстер
      </label><br/>
      <button type="submit">Зареєструватися</button>
    </form>
  );
};

export default Register;
