import React, { createContext, useState, useContext, useEffect } from 'react';

export interface LoadingMessage {
  loading: boolean;
  description?: string;
}

interface CountDownsContextData {
  minutes: number;
  seconds: number;
  isActive: boolean;
  hasFinished: boolean;
}

let countDownTimeOut: NodeJS.Timeout;

const CountDownsContext = createContext<CountDownsContextData>(
  {} as CountDownsContextData,
);

const CountDownsProvider: React.FC = ({ children }) => {
  const [time, setTimes] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [hasFinished, setHasFinished] = useState<boolean>(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    if (isActive && time > 0) {
      countDownTimeOut = setTimeout(() => {
        setTimes(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);
  return (
    <CountDownsContext.Provider
      value={{ minutes, seconds, isActive, hasFinished }}
    >
      {children}
    </CountDownsContext.Provider>
  );
};

function useCountDownsData(): CountDownsContextData {
  const context = useContext(CountDownsContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingPorivider');
  }

  return context;
}

export { CountDownsProvider, useCountDownsData };
