import { Dispatch, FC, SetStateAction, useState, useEffect } from "react";
import "./StateDetails.scss";

export interface IStateDetails {
  name: string;
  abbr: string;
  capital: string;
  mpc: string;
  population: string;
  sqMiles: string;
  tz1: string;
  tz2: string;
  dst: string;
}

interface IStateDetailsProps extends IStateDetails {
  setModal: Dispatch<SetStateAction<boolean>>;
}

export const StateDetails: FC<IStateDetailsProps> = ({
  name,
  abbr,
  capital,
  mpc,
  population,
  sqMiles,
  tz1,
  tz2,
  dst,
  setModal,
}) => {
  const [flag, setFlag] = useState<any>();
  const fetchImage = async () => {
    await fetch(
      `https://www.50states.com/images/redesign/flags/${abbr.toLowerCase()}-largeflag.png`
    )
      .then(async (res) => {
        const imageBlob = await res.blob();
        const imageObjectURL = URL.createObjectURL(imageBlob);
        setFlag(imageObjectURL);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchImage();
  }, []);

  return (
    <div className="StateDetails">
      <button className="btn-sm" onClick={() => setModal(false)}>
        X
      </button>
      <div className="StateDetails__wrapper">
        <div className="StateDetails__details">
          <ul>
            <li>
              <span>Name</span>
              <span>{name}</span>
            </li>
            <li>
              <span>Abbreviation</span>
              <span>{abbr}</span>
            </li>
            <li>
              <span>Capital</span>
              <span>{capital}</span>
            </li>
            <li>
              <span>Most Populous City</span>
              <span>{mpc}</span>
            </li>
            <li>
              <span>Population</span>
              <span>{population}</span>
            </li>
            <li>
              <span>Square Miles</span>
              <span>{sqMiles}</span>
            </li>
            <li>
              <span>Time Zone 1</span>
              <span>{tz1}</span>
            </li>
            <li>
              <span>Time Zone 2</span>
              <span>{tz2}</span>
            </li>
            <li>
              <span>DST</span>
              <span>{dst}</span>
            </li>
            <li>
              <img src={flag} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

/*

    "name": "ALABAMA",
    "abbreviation": "AL",
    "capital": "Montgomery",
    "most-populous-city": "Birmingham",
    "population": "4708708",
    "square-miles": "52423",
    "time-zone-1": "CST (UTC-6)",
    "time-zone-2": "EST (UTC-5)",
    "dst": "YES"
*/
