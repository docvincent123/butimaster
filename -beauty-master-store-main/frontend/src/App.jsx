// src/App.js
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext }    from './context/AuthContext';
import Header              from './components/Header';

import MastersList         from './pages/MastersList';
import MasterProfile       from './pages/MasterProfile';
import Login               from './pages/Login';
import Register            from './pages/Register';
import Dashboard          from './pages/Dashboard';        // застарілий, можем видалити
import ClientDashboard     from './pages/ClientDashboard';
import MasterDashboard     from './pages/MasterDashboard';
import Payment             from './pages/Payment';

function App() {
  const { token, user } = useContext(AuthContext);
  const isMaster = user?.role === 'master';

  return (
    <Router>
      <Header />

      <Routes>
        {/* Головна */}
        <Route path="/" element={<MastersList />} />

        {/* Аутентифікація */}
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

        {/* Оплата */}
        <Route path="/payment/:appointmentId" element={<Payment />} />

        {/* Універсальний Dashboard */}
        <Route
          path="/dashboard"
          element={
            token
              ? (isMaster
                  ? <MasterDashboard />
                  : <ClientDashboard />)
              : <Navigate to="/login" replace />
          }
        />

        {/* Убезпечуємо всі інші шляхи */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
