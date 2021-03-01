import React from 'react';
import {ActionBar} from "./components/ActionBar";
import {Statistics} from "./components/Statistics";
import {Content} from "./components/Content";

function App() {
    return (
      <>
        <div className="container">
          <div className="row">
            <Statistics />
            <Content />
            <ActionBar />
          </div>
        </div>
      </>

    );
}

export default App;
