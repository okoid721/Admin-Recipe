// BreakFastItem.js
import React from 'react';
import { FaCommentAlt } from 'react-icons/fa';
import Button from '../Button';

const LaunchItem = ({
  id,
  name,
  image,
  directions,
  category,
  description,
  ingredients,
  deleteItem, // Corrected prop name
}) => {
  return (
    <div className=" bg-[#FCF6F9] border-[2px]  border-[#ffff] rounded-[20px] p-4 mb-4 flex  gap-4 w-[100%] text-[#222260] overflow-x-hidden ">
      <div className=" w-full h-screen text-start ">
        <h5 className=" text-2xl pl-8  mb-4 rounded-[20px] bg-white py-2 px-4 text-center ">
          <span className=" font-bold">Name:</span> "{name}"
        </h5>
        <h5 className=" text-2xl pl-8 mb-4 shadow-lg rounded-[20px] bg-white py-2 px-4 ">
          <span className=" font-bold">Image_Link:</span> "{image}"
        </h5>
        <div className=" flex flex-col gap-8">
          <div className=" w-[50%] overflow-y-auto bg-[white] rounded-[20px] shadow-lg p-4">
            <p className=" flex   gap-2 text-[#333] text-[20px]">
              <span className=" font-bold">Category:</span>
              {category}{' '}
            </p>
          </div>
          <div className="  w-[80%] h-[300px] overflow-y-auto bg-[white] rounded-[20px] shadow-lg p-4">
            <p className=" flex   gap-2 text-[#333] text-[20px]  w-full h-full  ">
              <span className=" font-bold">Directions:</span>
              {directions}{' '}
            </p>
          </div>
          <div className="  w-[80%] h-[300px] overflow-y-auto bg-[white] rounded-[20px] shadow-lg p-4">
            <p className=" flex   gap-2 text-[#333] text-[20px]  w-full h-full  ">
              <span className=" font-bold">Description:</span>
              {description}{' '}
            </p>
          </div>
          <div className="  w-[80%] h-[300px] overflow-y-auto bg-[white] rounded-[20px] shadow-lg p-4">
            <p className=" flex   gap-2 text-[#333] text-[20px]  w-full h-full  ">
              <span className=" font-bold">Ingredients:</span>
              {ingredients}{' '}
            </p>
          </div>
        </div>
        <div className="mt-4 " onClick={() => deleteItem(id)}>
          {' '}
          <Button label="Delete" />
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
