import * as React from "react";
import { Menus } from "../engine/menus";
import { initialMenus } from "../engine/engine";

export interface GameContextInterface {
menus?: Menus,
}

export const GameContext = React.createContext<GameContextInterface>({menus: initialMenus});

// eslint-disable-next-line react/prop-types
export const GameContextProvider: React.FC<GameContextInterface> = ({ children }) => {
  return (
    <GameContext.Provider value={{menus: initialMenus}}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => React.useContext(GameContext);