import React, { useState, useEffect } from 'react';

import { getCategories, deleteCategory } from '../api';

import CategoryForm from './CategoryForm';



const CategoryList = () => {

  const [categories, setCategories] = useState([]);

  const [editingCategory, setEditingCategory] = useState(null);



  useEffect(() => {

    fetchCategories();

  }, []);



  const fetchCategories = async () => {

    try {

      const response = await getCategories();

      setCategories(response.data);

    } catch (error) {

      console.error('Error fetching categories', error);

    }

  };



  const handleDelete = async (id) => {

    try {

      await deleteCategory(id);

      fetchCategories();

    } catch (error) {

      console.error('Error deleting category', error);

    }

  };



  const handleEdit = (category) => {

    setEditingCategory(category);

  };



  return (

    <div>

      <h1>Categories</h1>

      <CategoryForm category={editingCategory} onCategorySaved={fetchCategories} />

      <ul>

        {categories.map((category) => (

          <li key={category.id}>

            {category.name}

            <button onClick={() => handleEdit(category)}>Edit</button>

            <button onClick={() => handleDelete(category.id)}>Delete</button>

          </li>

        ))}

      </ul>

    </div>

  );

};



export default CategoryList;