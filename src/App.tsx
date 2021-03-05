import React from 'react';
import {ActionBar} from "./layout/ActionBar";
import {Statistics} from "./layout/Statistics";
import {Content} from "./layout/Content";
import { GameContext, GameContextProvider } from "./context/GameContext";

function App() {
    return (
      <>
        <div className="container">
          <div className="row">
            <GameContextProvider>
              <Statistics />
              <Content />
              <ActionBar />
            </GameContextProvider>
          </div>
        </div>
      </>

    );
}

export default App;
