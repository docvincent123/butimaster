import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">BEAUTYBOOK</div>
      <div className="search">
        <input type="text" placeholder="Пошук процедури або майстра" />
      </div>
      <div className="actions">
        <button className="icon">🤍</button>
        <button className="icon">🔔</button>
        <button className="icon">⚙️</button>
        <img src="/images/avatar.png" alt="avatar" className="avatar"/>
      </div>
    </header>
  );
}
