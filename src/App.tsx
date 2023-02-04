import { FC, useState } from "react";
import "./App.css";

// Components
import { Menu } from "./components/Menu/Menu";
import { Guess } from "./components/Guess/Guess";
import { States } from "./components/States/States";
import { StateDetails } from "./components/StateDetails/StateDetails";

export type Component = "guess" | "states" | "none";

export const App: FC = () => {
  const [component, setComponent] = useState<Component>("none");
  return (
    <div className="App">
      <Menu setComponent={setComponent} />
      {component === "guess" ? (
        <Guess />
      ) : component === "states" ? (
        <States />
      ) : (
        ""
      )}
    </div>
  );
};
