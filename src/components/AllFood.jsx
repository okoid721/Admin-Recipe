import React from 'react';
import { useGlobalContext } from '../context/globalContext';
import BreakFastItem from '../items/BreakFastItem';

const AllFood = () => {
  const { deleteBreakfast } = useGlobalContext();
  const [all, setall] = React.useState([]);
  React.useEffect(() => {
    getVegi();
  }, []);
  const getVegi = async () => {
    const check = localStorage.getItem('allfood');
    if (check) {
      setall(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://recipe-bakend.onrender.com/api/food/get-breakfast`
      );
      const data = await api.json();
      localStorage.setItem('food', JSON.stringify(data));
      setall(data);
      console.log(data);
    }
  };

  return (
    <div className="my-16 mx-0 text-center ">
      <h2 className="font-sans font-extrabold text-3xl underline mb-4">
        All Food
      </h2>

      <div className="income">
        {all.map((breakfast) => {
          const {
            _id,
            name,
            image,
            directions,
            category,
            description,
            ingredients,
          } = breakfast;
          return (
            <BreakFastItem
              key={_id}
              id={_id}
              name={name}
              description={description}
              image={image}
              directions={directions}
              category={category}
              ingredients={ingredients}
              deleteItem={deleteBreakfast}
              // Pass deleteBreakfast
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllFood;
