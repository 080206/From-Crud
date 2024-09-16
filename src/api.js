import axios from 'axios';



const API_URL = 'http://127.0.0.1:8000/categories/'; // Cambia esto a la URL de tu API



export const getCategories = () => axios.get(API_URL);

export const getCategory = (id) => axios.get(`${API_URL}${id}`);

export const createCategory = (category) => axios.post(API_URL, category);

export const updateCategory = (id, category) => axios.put(`${API_URL}${id}`, category);

export const deleteCategory = (id) => axios.delete(`${API_URL}${id}`);