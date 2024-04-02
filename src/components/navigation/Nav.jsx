import React, { useEffect, useRef, useState } from 'react';
import { menuItems } from '../../utils/menuItems';
import { TbLogout } from 'react-icons/tb';
import { FaBars } from 'react-icons/fa6';

const Nav = ({ active, setActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className=" relative z-50 ">
      <div
        className={` px-6 py-8 absolute lg:sticky  h-[90vh] w-[300px]  bg-[#d7d7d7] border-[3px] border-white rounded-[32px] flex  flex-col   gap-2 items-center justify-between `}
      >
        <div className=" h-[100px] flex  flex-col items-center gap-4">
          <img
            src="https://avatar.iran.liara.run/public"
            alt=""
            className=" w-[50px] h-[50px] rounded-[50%]"
          />
          <div className=" flex items-center  gap-0  flex-col">
            <h2 className=" font-bold  text-2xl">Mike</h2>
            <p className=" font-semibold">Your Money</p>
          </div>
        </div>
        <ul
          className=" flex  flex-col gap-5 items-center relative "
          onClick={toggleMenu}
        >
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                className={`  flex-row gap-2   items-center text-center flex justify-center cursor-pointer ${
                  active === item.id
                    ? "before:content-[''] before:absolute before:left-0 before:top-0 before:w-[4px] h-8 bg-gray-700 rounded-[20px] px-3 py-2  "
                    : ''
                }`}
                onClick={() => setActive(item.id)}
              >
                {item.icon}
                <span className="">{item.title}</span>
              </li>
            );
          })}
        </ul>
        <div>
          <li className="flex items-center flex-col ">
            {<TbLogout />} SignOut{' '}
          </li>
        </div>
      </div>
    </div>
  );
};

export default Nav;
