// таби окремо
import React from 'react';

export default function TabLayout({ tabs, activeKey, onSelect }) {
  return (
    <ul className="nav nav-tabs">
      {tabs.map(tab => (
        <li className="nav-item" key={tab.eventKey}>
          <button
            className={`nav-link ${activeKey === tab.eventKey ? 'active' : ''}`}
            onClick={() => onSelect(tab.eventKey)}
          >
            {tab.title}
          </button>
        </li>
      ))}
    </ul>
  );
}
