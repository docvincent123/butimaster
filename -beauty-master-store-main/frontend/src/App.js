import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext }    from './context/AuthContext';
import Header              from './components/Header';

import MastersList         from './pages/MastersList';
import MasterProfile       from './pages/MasterProfile';
import Login               from './pages/Login';
import Register            from './pages/Register';
import ClientDashboard     from './pages/ClientDashboard';
import MasterDashboard     from './pages/MasterDashboard';
import Payment             from './pages/Payment';

function App() {
  const { token, user } = useContext(AuthContext);
  const isMaster = user?.role === 'master';

  return (
    <>
      <Header />

      <Routes>
        {/* Головна сторінка */}
        <Route path="/" element={<MastersList />} />

        {/* Логін/Реєстрація */}
        <Route
          path="/login"
          element={!token ? <Login /> : <Navigate to="/dashboard" replace />}
        />
        <Route
          path="/register"
          element={!token ? <Register /> : <Navigate to="/dashboard" replace />}
        />

        {/* Профіль майстра */}
        <Route path="/masters/:id" element={<MasterProfile />} />

        {/* Оплата запису */}
        <Route path="/payment/:appointmentId" element={<Payment />} />

        {/* Універсальний дашборд: клієнт або майстер */}
        <Route
          path="/dashboard"
          element={
            token
              ? isMaster
                ? <MasterDashboard />
                : <ClientDashboard />
              : <Navigate to="/login" replace />
          }
        />

        {/* Усі інші шляхи → головна */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
  