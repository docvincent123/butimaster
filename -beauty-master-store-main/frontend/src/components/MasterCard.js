import React from 'react';
import { Link } from 'react-router-dom';

export default function MasterCard({ master }) {
  return (
    <div className="master-card">
      <img src={master.imageUrl} alt={master.user.name} />
      <div className="card-body">
        <h3>{master.user.name}</h3>
        <p>{master.specialization.join(', ')}</p>
        <div className="card-footer">
          <span>$30</span>
          <Link to={`/masters/${master._id}`}>Деталі</Link>
        </div>
      </div>
    </div>
  );
}
