// AddBreakfast.js
import React from 'react';
import { useGlobalContext } from '../context/globalContext';

import DinnerForm from '../form/DinnerForm';
import DinnerItem from '../items/DinnerItem';

const AddDinner = () => {
  const { addDinner, dinner, getDinner, deleteDinner } = useGlobalContext();
  React.useEffect(() => {
    getDinner();
  }, []);

  return (
    <div className=" text-white ">
      <main className="py-8 px-6 w-full">
        <h2 className="font-bold text-3xl underline mb-3">Dinner</h2>
        <div className="">
          <div className="form-container">
            <DinnerForm />
          </div>
          {/* <div>
            {dinner.length > 0 &&
              dinner.map((lunch) => {
                const {
                  _id,
                  name,
                  image,
                  directions,
                  category,
                  description,
                  ingredients,
                } = lunch;
                return (
                  <DinnerItem
                    key={_id}
                    id={_id}
                    name={name}
                    description={description}
                    image={image}
                    directions={directions}
                    category={category}
                    ingredients={ingredients}
                    deleteItem={deleteDinner}
                    // Pass deleteBreakfast
                  />
                );
              })}
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default AddDinner;
