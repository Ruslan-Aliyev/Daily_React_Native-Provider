import { useState, createContext, useContext } from 'react';
import Daily from '@daily-co/react-native-daily-js';


const MyDailyContext = createContext({});

const MyDailyProvider = ({ children }) => {
  let call = null;

  if (call === null)
  {
    call = Daily.createCallObject();
    call.setLocalVideo(false);
  }

  return <MyDailyContext.Provider value={{call}}>{children}</MyDailyContext.Provider>;
};

const useMyDaily = () => {
  return useContext(MyDailyContext);
};

export { MyDailyProvider, useMyDaily };