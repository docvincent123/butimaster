// ,бронювання
import React from 'react';

export default function BookingsList({ bookings }) {
  if (!bookings.length) {
    return <p className="mt-3">Немає бронювань.</p>;
  }
  return (
    <table className="table mt-3">
      <thead>
        <tr>
          <th>Дата</th>
          <th>Майстер</th>
          <th>Послуга</th>
          <th>Статус</th>
          <th>Дії</th>
        </tr>
      </thead>
      <tbody>
        {bookings.map(b => (
          <tr key={b.id}>
            <td>{b.date}</td>
            <td>{b.masterName || b.clientName}</td>
            <td>{b.service}</td>
            <td>{b.status}</td>
            <td>
              {/* тут можна додати кнопки, наприклад скасувати, підтвердити */}
              {b.status === 'Очікує' && <button className="btn btn-sm btn-outline-danger">Скасувати</button>}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
