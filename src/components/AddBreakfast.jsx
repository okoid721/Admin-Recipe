// AddBreakfast.js
import React from 'react';
import { useGlobalContext } from '../context/globalContext';
import BreakFastForm from '../form/BreakFastForm';
import BreakFastItem from '../items/BreakFastItem';

const AddBreakfast = () => {
  const { addBreakfast, breakFast, getBreakfast, deleteBreakfast } =
    useGlobalContext();
  React.useEffect(() => {
    getBreakfast();
  }, []);

  return (
    <div className="bg-black text-white ">
      <main className="py-8 px-6 w-full">
        <h2 className="font-bold text-3xl underline mb-3">Breakfast</h2>
        <div className="">
          <div className="form-container">
            <BreakFastForm />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddBreakfast;
