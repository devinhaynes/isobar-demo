import { FC, Dispatch, SetStateAction } from "react";
import "./Menu.scss";

import { Component } from "../../App";

interface IMenuProps {
  setComponent: Dispatch<SetStateAction<Component>>;
}

export const Menu: FC<IMenuProps> = ({ setComponent }) => {
  return (
    <nav className="Menu">
      <ul>
        <li>
          <button className="btn-lg" onClick={() => setComponent("states")}>
            States
          </button>
        </li>
        <li>
          <button className="btn-lg" onClick={() => setComponent("guess")}>
            Guess
          </button>
        </li>
      </ul>
    </nav>
  );
};
