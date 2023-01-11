import { useState } from 'react';
import './number.css';


const Number = () => {

    const [numClick, setNumClick] = useState([]);

  const handleClick = () => {
    const random = Math.floor(Math.random()*100);
    setNumClick((current) => [...current, random]);
    console.log(numClick);
  }

  return (
    <>
      <button
        onClick={handleClick}
        disabled={numClick.length < 5 ? false : true}
      >
        Genera un numero
      </button>
      {numClick.map((num) => {
        return (
          <div className="btn">
            <p>{num}</p>
          </div>
        );
      })}
    </>
  );
}

export default Number;

