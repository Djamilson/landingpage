import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
  ReactNode,
} from 'react';

import challenges from '../../challenges.json';
import LevelUpModal from '../components/LevelUpModal';

export interface LoadingMessage {
  loading: boolean;
  description?: string;
}

interface IChallengesProviderProps {
  children: ReactNode;

  level: number;
  currentExperience: number;
  challengesCompleted: number;
}
interface IChallenge {
  type: 'body' | 'eve';
  description: string;
  amount: number;
}
interface ChallengesContextData {
  level: number;

  currentExperience: number;
  challengesCompleted: number;
  levelUp: () => void;
  startNewChallenge: () => void;

  experienceToNextLevel: number;
  closeModalChallenge: () => void;
}

const LoadingContext = createContext<ChallengesContextData>(
  {} as ChallengesContextData,
);

const LoadingProvider: React.FC<IChallengesProviderProps> = ({
  children,
  ...rest
}) => {
  const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState<boolean>(false);

  const [level, setLevel] = useState<number>(rest.level ?? 1);
  //31rem equivalente a 100%
  const [currentExperience, setCurrentExperience] = useState<number>(
    rest.currentExperience ?? 0,
  );
  const [challengesCompleted, setChallengesCompleted] = useState<number>(
    rest.challengesCompleted ?? 0,
  );
  const [activeChallenge, setActiveChallenge] = useState(null);

  useEffect(() => {}, [level, currentExperience, challengesCompleted]);

  useEffect(() => {
    Notification.requestPermission();
  }, []);

  const levelUp = useCallback(() => {
    setLevel(level + 1);
    setIsLevelUpModalOpen(true);
  }, [setLevel, level, setIsLevelUpModalOpen]);

  // eslint-disable-next-line no-restricted-properties
  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

  const startNewChallenge = useCallback(() => {
    const randonChallengeIndex = Math.floor(Math.random() * challenges.length);
    const challenge = challenges[randonChallengeIndex];

    // setActiveChallenge(challenge);

    new Audio('/notification.mp3').play();
    /*
    if (Notification.permission === 'granted') {
      new Notification('Novo desafio', {
        body: `Valendo ${challenge.amount}xp!`,
      });
    }*/
  }, [setLevel, level]);

  const closeModalChallenge = useCallback(() => {
    setIsLevelUpModalOpen(false);
  }, [setIsLevelUpModalOpen]);

  return (
    <LoadingContext.Provider
      value={{
        level,

        currentExperience,
        challengesCompleted,
        levelUp,
        startNewChallenge,

        experienceToNextLevel,
        closeModalChallenge,
      }}
    >
      {children}
      {isLevelUpModalOpen && <LevelUpModal />}
    </LoadingContext.Provider>
  );
};

function useLoading(): ChallengesContextData {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingPorivider');
  }

  return context;
}

export { LoadingProvider, useLoading };
