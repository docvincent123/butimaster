// src/pages/Payment.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../api/api';

const DummyPayment = ({ appointmentId }) => {
  const nav = useNavigate();
  const pay = async () => {
    await api.post('/payments/confirm', { appointmentId });
    nav('/dashboard');
  };
  return (
    <div style={{ textAlign: 'center', margin: '2rem' }}>
      <p>🔒 Платіжний сервіс тимчасово вимкнено.</p>
      <button onClick={pay}>Підтвердити оплату</button>
    </div>
  );
};

const Payment = () => {
  const { appointmentId } = useParams();
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    api.post('/payments/create-payment-intent', {
      appointmentId,
      amount: 20
    }).then(res => setClientSecret(res.data.clientSecret));
  }, [appointmentId]);

  if (clientSecret === 'stub-secret') {
    return <DummyPayment appointmentId={appointmentId} />;
  }

  // тут могла б бути реальна логіка Stripe
  return <div>Готуємо платіжний елемент…</div>;
};

export default Payment;
