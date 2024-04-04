import React, { useEffect, useState } from 'react';

const AllFood = () => {
  const [foodData, setFoodData] = useState({
    breakfasts: [],
    dinners: [],
    launches: [],
    smallChops: [],
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://recipe-bakend.onrender.com/api/food/get-all'
      );
      const data = await response.json();
      console.log('Data from API:', data);
      setFoodData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <div className="flex items-center flex-col ">
        <div className=" flex items-center justify-center font-extrabold uppercase mb-10 underline">
          All Data
        </div>
        <div className="w-[700px] h-[700px]">
          {Object.keys(foodData).map((category) => (
            <div
              key={category}
              className=" flex flex-col items-center flex-wrap gap-4"
            >
              <h2 className=" font-extrabold mt-10 underline uppercase ">
                {category}
              </h2>
              <div className=" flex flex-wrap flex-row gap-8 items-center justify-center">
                {foodData[category].map((item) => (
                  <div key={item._id} className=" flex flex-col items-center  ">
                    <img src={item.image} alt={item.name} className=" w-28" />
                    <h3>{item.name}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default AllFood;
