// Вимикаємо MetaMask‑ін’єкцію(тимчасово це зроблю)
if (typeof window !== 'undefined' && window.ethereum) {
  try {
    delete window.ethereum;
  } catch (e) {
    // якщо delete не дозволений — замість видалення перезаписуємо на порожній об’єкт
    window.ethereum = {};
  }
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
);

console.log('📌 index.js: перед рендером');
