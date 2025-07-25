// src/api/api.js

// Заглушкові дані
const dummyMasters = [ /* … */ ];
const dummyAppointments = [ /* … */ ];

const api = {
  // Тепер є interceptors.request.use, щоб AuthContext не падав
  interceptors: {
    request: {
      use: () => {}  // нічого не робить
    }
  },

  get: (url) => {
    console.log(`STUB GET ${url}`);
    if (url === '/masters') return Promise.resolve({ data: dummyMasters });
    if (url.startsWith('/masters/')) {
      const id = url.split('/')[2];
      const master = dummyMasters.find(m => m._id === id) || dummyMasters[0];
      const portfolio = [{ _id: 'p1', imageUrl: 'https://via.placeholder.com/150', title: 'Приклад' }];
      return Promise.resolve({ data: { master, portfolio } });
    }
    if (url === '/appointments') return Promise.resolve({ data: dummyAppointments });
    return Promise.resolve({ data: [] });
  },

  post: (url, body) => {
    console.log(`STUB POST ${url}`, body);
    if (url === '/auth/login')  return Promise.resolve({ data: { token: 'stub-token' }});
    if (url === '/auth/register') return Promise.resolve({ data: {} });
    if (url === '/appointments') return Promise.resolve({ data: { _id: 'new-app', ...body }});
    if (url === '/payments/create-payment-intent')
      return Promise.resolve({ data: { clientSecret: 'stub-secret' } });
    if (url === '/payments/confirm') return Promise.resolve({ data: {} });
    return Promise.resolve({ data: {} });
  }
};

export default api;
