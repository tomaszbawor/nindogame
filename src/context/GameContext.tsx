import * as React from "react";

export interface GameContextInterface {

}

export const GameContext = React.createContext<GameContextInterface>({});

// eslint-disable-next-line react/prop-types
export const GameContextProvider: React.FC<GameContextInterface> = ({ children }) => {
  return (
    <GameContext.Provider value={{}}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => React.useContext(GameContext);