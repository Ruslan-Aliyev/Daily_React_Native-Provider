import { useState, useEffect, createContext, useContext } from 'react';
import Daily from '@daily-co/react-native-daily-js';


const MyDailyContext = createContext({});

const MyDailyProvider = ({ children }) => {
  const [call, setCall] = useState();

  useEffect(() => {
    if (call) return;

    const callObject = Daily.createCallObject();
    callObject.setLocalVideo(false);
    setCall(callObject);

    return () => {
      callObject.leave();
      callObject.destroy();
    };
  }, [Daily, call]);

  useEffect(() => {
    if (!call) return;

    call
      .on('joined-meeting', () => handleDailyEvents)
      .on('left-meeting', () => handleDailyEvents)
      .on('participant-joined', () => handleDailyEvents)
      .on('participant-updated', () => handleDailyEvents)
      .on('participant-left', () => handleDailyEvents)
      .on('error', () => handleDailyEvents);
  }, [call]);

  const handleDailyEvents = (event) => {
    if (!call) return;

    console.log({event});

    switch(event.action) {
      case 'joined-meeting':
        console.log('joined-meeting');
        break;
      case 'left-meeting':
        console.log('left-meeting');
        break;
      case 'participant-joined':
        console.log('participant-joined');
        break;
      case 'participant-updated':
        console.log('participant-updated');
        break;
      case 'participant-left':
        console.log('participant-left');
        break;
      case 'error':
        console.log('Daily call error !!!')
        break;
      default:
        // do nothing for now
    }
  };

  return <MyDailyContext.Provider value={{call}}>{children}</MyDailyContext.Provider>;
};

const useMyDaily = () => {
  return useContext(MyDailyContext);
};

export { MyDailyProvider, useMyDaily };