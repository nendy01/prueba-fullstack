import type { FC } from "react";
import "./App.css";

import Agents from "../Agents/Agents";
import Form from "../Form/Form";

const App: FC = () => {
  return (
    <div className="app">
      <h1>Agents</h1>
      <Form />
      <Agents />
    </div>
  );
};

export default App;
