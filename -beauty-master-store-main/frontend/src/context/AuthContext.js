import React, { createContext, useState } from 'react';
import api from '../api/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || null);

  // Вхід
  const login = async (email, password) => {
    const { data } = await api.post('/auth/login', { email, password });
    localStorage.setItem('token', data.token);
    setToken(data.token);
  };

  // Реєстрація
  const register = async (name, email, password, isMaster) => {
    await api.post('/auth/register', { name, email, password, isMaster });
  };

  // Вихід
  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
  };

  // Додаємо токен у заголовки
  api.interceptors.request.use((config) => {
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  });

  return (
    <AuthContext.Provider value={{ token, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
