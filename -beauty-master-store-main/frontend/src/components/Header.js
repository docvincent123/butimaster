import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Header() {
  const { token, logout, user } = useContext(AuthContext);

  return (
    <header style={{ backgroundColor: '#ffd3b6' }}>
      <div className="container">
        <div className="row align-items-center py-3">
          {/* Лого */}
          <div className="col-auto">
            <Link to="/" className="h4 text-dark mb-0">
              Buati Masters
            </Link>
          </div>

          {/* Пошук */}
          <div className="col">
            <form onSubmit={e => e.preventDefault()}>
              <div className="input-group rounded-pill shadow-sm">
                <span className="input-group-text bg-white border-0 rounded-start-pill">
                  <i className="bi bi-search"></i>
                </span>
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search something here"
                />
                <button className="btn btn-white border-0 rounded-end-pill">
                  <i className="bi bi-filter"></i>
                </button>
              </div>
            </form>
          </div>

          {/* Навігація, налаштування та аватар */}
          <div className="col-auto">
            <div className="d-flex align-items-center">
              {token ? (
                <>
                  <Link to="/dashboard" className="me-3 text-dark">
                    Кабінет
                  </Link>
                  <button onClick={logout} className="btn btn-outline-dark me-3">
                    Вийти
                  </button>

                  {/* Іконка налаштувань */}
                  <Link to="/settings" className="text-dark me-3 fs-4">
                    <i className="bi bi-gear-fill"></i>
                  </Link>

                  {/* Аватарка або іконка‑заглушка */}
                  {user && user.avatarUrl ? (
                    <Link to="/profile">
                      <img
                        src={user.avatarUrl}
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '40px', height: '40px', objectFit: 'cover' }}
                      />
                    </Link>
                  ) : (
                    <Link to="/profile" className="text-dark fs-2">
                      <i className="bi bi-person-circle"></i>
                    </Link>
                  )}
                </>
              ) : (
                <>
                  <Link to="/login" className="me-3 text-dark">
                    Увійти
                  </Link>
                  <Link to="/register" className="btn btn-dark text-white">
                    Реєстрація
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
