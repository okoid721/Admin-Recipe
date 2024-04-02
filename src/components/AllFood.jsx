// import React from 'react';
// import { useGlobalContext } from '../context/globalContext';
// import BreakFastItem from '../items/BreakFastItem';

// const AllFood = () => {
//   const { deleteBreakfast, getBreakfast, breakFast } = useGlobalContext();

//   React.useEffect(() => {
//     breakFast();
//   }, []);

//   return (
//     <div className="my-16 mx-0 text-center ">
//       <h2 className="font-sans font-extrabold text-3xl underline mb-4">
//         All Food
//       </h2>

//       <div className="income">
//         {breakFast.length > 0 &&
//           breakFast.map((breakfast) => {
//             const {
//               _id,
//               name,
//               image,
//               directions,
//               category,
//               description,
//               ingredients,
//             } = breakfast;
//             return (
//               <BreakFastItem
//                 key={_id}
//                 id={_id}
//                 name={name}
//                 description={description}
//                 image={image}
//                 directions={directions}
//                 category={category}
//                 ingredients={ingredients}
//                 deleteItem={deleteBreakfast}
//                 // Pass deleteBreakfast
//               />
//             );
//           })}
//       </div>
//     </div>
//   );
// };

// export default AllFood;
