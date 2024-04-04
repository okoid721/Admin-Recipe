import axios from 'axios';
import React, { useState } from 'react';

const BASE_URL = 'https://recipe-bakend.onrender.com/api/food';

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
  const [breakFast, setBreakFast] = useState([]);
  const [launch, setLaunch] = useState([]);
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
  const addLaunch = async (lunch) => {
    try {
      const response = await axios.post(`${BASE_URL}/add-launch`, lunch);
    } catch (error) {
      setError(error.response.data.message);
    }
    getLaunch();
  };
  const addDinner = async (dinners) => {
    try {
      const response = await axios.post(`${BASE_URL}/add-dinner`, dinners);
    } catch (error) {
      setError(error.response.data.message);
    }
    getDinner();
  };
  const addSmallChop = async (smallchop) => {
    try {
      const response = await axios.post(
        `https://recipe-bakend.onrender.com/api/food/add-smallchop`,
        smallchop
      );
    } catch (error) {
      setError(error.response.data.message);
    }
    getSmallChops();
  };

  const getBreakfast = async () => {
    try {
      const response = await axios.get(
        `https://recipe-bakend.onrender.com/api/food/get-breakfast`
      );
      setBreakFast(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const getDinner = async () => {
    try {
      const response = await axios.get(
        `https://recipe-bakend.onrender.com/api/food/get-dinner`
      );
      setDinner(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const getLaunch = async () => {
    try {
      const response = await axios.get(
        `https://recipe-bakend.onrender.com/api/food/get-launch`
      );
      setLaunch(response.data);
    } catch (err) {
      setError(err.response.data.message);
    }
  };
  const getSmallChops = async () => {
    try {
      const response = await axios.get(
        `https://recipe-bakend.onrender.com/api/food/get-smallchop`
      );
      setSmallChop(response.data);
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
    getBreakfast();
  };
  const deleteDinner = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-dinner/${id}`);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
    getDinner();
  };
  const deleteLaunch = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-launch/${id}`);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
    getLaunch();
  };
  const deleteSmallChops = async (id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/delete-smallchop/${id}`);
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
    getSmallChops();
  };

  return (
    <GlobalContext.Provider
      value={{
        addBreakfast,
        getBreakfast,
        deleteBreakfast,
        breakFast,
        addLaunch,
        getLaunch,
        deleteLaunch,
        launch,
        addDinner,
        getDinner,
        deleteDinner,
        dinner,
        addSmallChop,
        getSmallChops,
        deleteSmallChops,
        smallChop,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(GlobalContext);
};
