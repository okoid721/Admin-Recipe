import axios from 'axios';
import React, { useState } from 'react';

const BASE_URL = 'https://recipe-bakend.onrender.com/api/food';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [breakFast, setBreakFast] = useState([]);
  const [lunch, setLunch] = useState([]);
  const [dinner, setDinner] = useState([]);
  const [smallChop, setSmallChop] = useState([]);
  const [error, setError] = useState(null);

  const addBreakfast = async (breakfast) => {
    try {
      const response = await axios.post(`${BASE_URL}/add-breakfast`, breakfast);
    } catch (error) {
      setError(error.response.data.message);
    }
    getBreakfast();
  };

  const getBreakfast = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all`);
      setBreakFast(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  const deleteBreakfast = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-breakfast/${id}`);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
    setBreakFast();
  };

  return (
    <GlobalContext.Provider
      value={{
        addBreakfast,
        getBreakfast,
        deleteBreakfast,
        breakFast,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
