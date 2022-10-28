import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Button} from "react-bootstrap";
import {routh_table} from "./functions/functions"

function App(): JSX.Element {
  return (
    <div className="App">
      <Button onClick={() => routh_table({coefs: [1, 1, 2, 8]})}>routh</Button>
    </div>
  );
}

export default App;
