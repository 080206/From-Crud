import React, { useState, useEffect } from 'react';

import { createCategory, updateCategory } from '../api';



const CategoryForm = ({ category, onCategorySaved }) => {

  const [name, setName] = useState('');



  useEffect(() => {

    if (category) {

      setName(category.name);

    }

  }, [category]);



  const handleSubmit = async (e) => {

    e.preventDefault();

    const categoryData = { id: category ? category.id : Date.now(), name };

    try {

      if (category) {

        await updateCategory(category.id, categoryData);

      } else {

        await createCategory(categoryData);

      }

      setName('');

      onCategorySaved();

    } catch (error) {

      console.error('Error saving category', error);

    }

  };



  return (

    <form onSubmit={handleSubmit}>

      <input

        type="text"

        value={name}

        onChange={(e) => setName(e.target.value)}

        placeholder="Category Name"

        required

      />

      <button type="submit">{category ? 'Update' : 'Create'} Category</button>

    </form>

  );

};



export default CategoryForm;

