import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { useGlobalContext } from '../context/globalContext';
import Button from '../Button';
import toast from 'react-hot-toast';

const BreakFastForm = () => {
  const { addBreakfast, getBreakfast } = useGlobalContext();
  const [inputState, setInputState] = useState({
    name: '',
    image: '',
    category: null,
    directions: '',
    description: '',
    ingredients: '',
  });

  const { name, image, directions, category, description, ingredients } =
    inputState;

  const handleInput = (name) => (e) => {
    setInputState({ ...inputState, [name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBreakfast(inputState);
    // Clear the form after submission
    setInputState({
      name: '',
      image: '',
      category: null,
      directions: '',
      description: '',
      ingredients: '',
    });
    getBreakfast();
    toast.success('Breakfast item added successfully!');
  };

  return (
    <form
      className="text-black  flex flex-col lg:gap-[2rem] gap-[10px]"
      onSubmit={handleSubmit}
    >
      <div className=" flex flex-col">
        <input
          type="text"
          value={name}
          name={'name'}
          placeholder="Food Name"
          onChange={handleInput('name')}
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white "
        />
      </div>
      <input
        onChange={handleInput('image')}
        type="text"
        name="image"
        value={image}
        className="bg-white"
        placeholder="Image Link Only"
      />

      <div className="w-[70%] h-[500px]">
        <textarea
          type="text"
          value={directions}
          name={'directions'}
          placeholder="Directions"
          onChange={handleInput('directions')}
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] h-full border-white w-[100%]"
        />
      </div>

      <div className=" ">
        <select
          name="category"
          value={category}
          id="category"
          required
          onChange={handleInput('category')}
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white "
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Salary">Shop</option>
          <option value="Bonus">Rice</option>
          <option value="Freelancer">Beans</option>
          <option value="Investment">Bread</option>
          <option value="Transfer">Drink</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className=" w-[70%] h-[500px]">
        <textarea
          name={'description'}
          id="description"
          value={description}
          onChange={handleInput('description')}
          placeholder="Description"
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] h-full w-full  border-white  "
        ></textarea>
      </div>
      <div className="w-[100%]">
        <textarea
          type="text"
          value={ingredients}
          name={'ingredients'}
          placeholder="Food ingredient"
          onChange={handleInput('ingredients')}
          className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] border-white w-[100%]"
        />
      </div>
      <div className="submit-btn">
        <Button type="submit" label="Add BreakFast" />{' '}
        {/* Trigger form submission */}
      </div>
    </form>
  );
};

export default BreakFastForm;