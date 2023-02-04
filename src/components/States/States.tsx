import { FC, useState } from "react";
import "./States.scss";

// Data
import { statesInfo } from "../../../states.json";

// Components
import { IStateDetails, StateDetails } from "../StateDetails/StateDetails";

interface IStateAttributes {
  name: string;
  abbreviation: string;
  capital: string;
  "most-populous-city": string;
  population: string;
  "square-miles": string;
  "time-zone-1": string;
  "time-zone-2": string;
  dst: string;
}

export const States: FC = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [stateData, setStateData] = useState<IStateDetails | null>();

  const activateModal = (attributes: IStateAttributes) => {
    setStateData({
      name: attributes.name,
      abbr: attributes.abbreviation,
      capital: attributes.capital,
      mpc: attributes["most-populous-city"],
      population: attributes.population,
      sqMiles: attributes["square-miles"],
      tz1: attributes["time-zone-1"],
      tz2: attributes["time-zone-2"],
      dst: attributes.dst,
    });
    setModal(true);
  };
  return (
    <div className="States">
      <div className="States__data">
        <ul>
          {statesInfo.states.map((state) => {
            return (
              <li>
                <button
                  onClick={() => activateModal(state["@attributes"])}
                  className="btn-sm"
                >
                  {state["@attributes"].name}
                </button>
              </li>
            );
          })}
        </ul>
        {modal && stateData ? (
          <StateDetails
            name={stateData.name}
            abbr={stateData.abbr}
            capital={stateData.capital}
            mpc={stateData.mpc}
            population={stateData.population}
            sqMiles={stateData.sqMiles}
            tz1={stateData.tz1}
            tz2={stateData.tz2}
            dst={stateData.dst}
            setModal={setModal}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
