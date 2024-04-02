import { useState } from 'react';
import './App.css';

import Nav from './components/navigation/Nav';
import AddBreakfast from './components/AddBreakfast';
import AddLaunch from './components/AddLaunch';
import AddDinner from './components/AddDinner';
import AddSmallChop from './components/AddSmallChop';
import AllFood from './components/AllFood';
import { useGlobalContext } from './context/globalContext';

function App() {
  const [active, setActive] = useState(1);

  const global = useGlobalContext();
  console.log(global);

  const displayData = () => {
    // eslint-disable-next-line default-case
    switch (active) {
      case 1:
        return <AddBreakfast />;
      case 2:
        return <AddLaunch />;
      case 3:
        return <AddDinner />;
      case 4:
        return <AddSmallChop />;
      case 5:
        return <AllFood />;
      default:
        return <AddBreakfast />; // Change this to a default component or null
    }
  };

  return (
    <div className=" h-full relative bg-gray-900 text-white">
      <main className=" lg:p-8 p-2 h-full flex gap-8">
        <Nav active={active} setActive={setActive} />
        <main className=" lg:flex-1 w-[100vw] h-[100vh]  bg-[#d7d7d7] border-[3px] border-white rounded-[32px] overflow-auto overflow-x-hidden ">
          {displayData()}
        </main>
      </main>
    </div>
  );
}

export default App;
