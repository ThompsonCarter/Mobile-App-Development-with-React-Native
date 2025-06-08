// src/api/axios.js
import axios from 'axios';

const API_BASE = 'https://api.example.com';

export const api = axios.create({
  baseURL: API_BASE,
  timeout: 10_000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async config => {
  const token = await getAuthToken(); // see §8.4
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});
