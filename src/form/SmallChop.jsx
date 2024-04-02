import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';
import { useGlobalContext } from '../context/globalContext';
import Button from '../Button';
import toast from 'react-hot-toast';

const SmallChop = () => {
  const { addSmallChop, getSmallChops } = useGlobalContext();
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
    addSmallChop(inputState);
    // Clear the form after submission
    setInputState({
      name: '',
      image: '',
      category: null,
      directions: '',
      description: '',
      ingredients: '',
    });
    getSmallChops();
    toast.success('Smallchops item added successfully!');
  };

  return (
    <div className="">
      <form
        className="text-black   flex flex-col lg:gap-[2rem] gap-[10px]"
        onSubmit={handleSubmit}
      >
        <div className=" flex flex-col">
          <input
            type="text"
            value={name}
            name={'name'}
            placeholder="Food Name"
            onChange={handleInput('name')}
            className="outline-0 rounded-[5px] font-extrabold underline border-[2px] px-[20px] py-[10px] border-white "
          />
        </div>
        <div className=" py-4 px-4 rounded-[20px] bg-white lg:w-[40%] w-fit">
          <input
            onChange={handleInput('image')}
            type="file"
            name="image"
            value={image}
            className="outline-0 rounded-[5px] border-[2px] px-[0] py-[0] border-white w-48"
            placeholder="Image Link Only"
          />
        </div>

        <div className="lg:w-[70%] w-full h-[500px]">
          <textarea
            type="text"
            value={directions}
            name={'directions'}
            placeholder="Directions:"
            onChange={handleInput('directions')}
            className=" font-semibold  outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] h-full border-white w-[100%]"
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
            <option value="Salary">Fries</option>
            <option value="Bonus">Sweets</option>
            <option value="Freelancer">Chickens</option>
            <option value="Investment">Bread</option>
            <option value="Transfer">Drink</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className=" lg:w-[70%] w-full h-[500px]">
          <textarea
            name={'description'}
            id="description"
            value={description}
            onChange={handleInput('description')}
            placeholder="Description"
            className="outline-0 rounded-[5px] border-[2px] px-[20px] py-[10px] h-full w-full  border-white  "
          ></textarea>
        </div>
        <div className="lg:w-[70%] w-full">
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
          <Button type="submit" label="Add Launch" />{' '}
        </div>
      </form>
    </div>
  );
};

export default SmallChop;
