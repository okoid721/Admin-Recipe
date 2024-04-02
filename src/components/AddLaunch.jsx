// AddBreakfast.js
import React from 'react';
import { useGlobalContext } from '../context/globalContext';
import LaunchForm from '../form/LaunchForm';
import LaunchItem from '../items/LaunchItem';

const AddLaunch = () => {
  const { addLaunch, launch, getLaunch, deleteLaunch } = useGlobalContext();
  React.useEffect(() => {
    getLaunch();
  }, []);

  return (
    <div className=" text-white ">
      <main className="py-8 px-6 w-full">
        <h2 className="font-bold text-3xl underline mb-3">Launch</h2>
        <div className="">
          <div className="form-container">
            <LaunchForm />
          </div>
          <div>
            {launch.length > 0 &&
              launch.map((lunch) => {
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
                  <LaunchItem
                    key={_id}
                    id={_id}
                    name={name}
                    description={description}
                    image={image}
                    directions={directions}
                    category={category}
                    ingredients={ingredients}
                    deleteItem={deleteLaunch}
                    // Pass deleteBreakfast
                  />
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddLaunch;
