const BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';

const handleResponse = async (response) => {
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }

  return data;
};

export const api = {
  // ===========================
  // Temple APIs
  // ===========================

  getAllTemples: async () => {
    const res = await fetch(`${BASE_URL}/temples`);
    return handleResponse(res);
  },

  getTempleById: async (id) => {
    const res = await fetch(`${BASE_URL}/temples/${id}`);
    return handleResponse(res);
  },

  searchTemples: async (query) => {
    const res = await fetch(
      `${BASE_URL}/temples/search/${encodeURIComponent(query)}`
    );
    return handleResponse(res);
  },

  // ⭐ NEW API (Internet Search)
  searchTempleOnline: async (query) => {
    const res = await fetch(
      `${BASE_URL}/temples/online/${encodeURIComponent(query)}`
    );
    return handleResponse(res);
  },

  // ===========================
  // Festival APIs
  // ===========================

  getAllFestivals: async () => {
    const res = await fetch(`${BASE_URL}/festivals`);
    return handleResponse(res);
  },

  // ===========================
  // Circuit APIs
  // ===========================

  getAllCircuits: async () => {
    const res = await fetch(`${BASE_URL}/circuits`);
    return handleResponse(res);
  },

  // ===========================
  // Authentication
  // ===========================

  signup: async (username, password) => {
    const res = await fetch(`${BASE_URL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    return handleResponse(res);
  },

 login: async (username, password) => {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  return handleResponse(res);
},

  // ===========================
  // Admin
  // ===========================

  addTemple: async (temple) => {
    const res = await fetch(`${BASE_URL}/temples`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(temple),
    });

    return handleResponse(res);
  },
  updateTemple: async (id, temple) => {
  const res = await fetch(`${BASE_URL}/temples/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(temple),
  });

  return handleResponse(res);
},

deleteTemple: async (id) => {
  const res = await fetch(`${BASE_URL}/temples/${id}`, {
    method: "DELETE",
  });

  return handleResponse(res);
},
};