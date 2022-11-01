import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Button} from "react-bootstrap";
import {routh_table} from "./functions/functions"
import {RouthTable} from "./components/routhin"

function App(): JSX.Element {
  return (
    <div className="App">
      <RouthTable></RouthTable>
    </div>
  );
}

export default App;
