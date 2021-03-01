import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
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
