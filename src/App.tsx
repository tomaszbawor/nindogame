import React from 'react';
import {ActionBar} from "./layout/ActionBar";
import {Statistics} from "./layout/Statistics";
import {Content} from "./layout/Content";

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
