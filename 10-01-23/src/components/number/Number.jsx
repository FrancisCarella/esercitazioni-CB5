import { useState } from 'react';
import './number.css';


const Number = () => {

    const [numSort, setNumSort] = useState([]);

  const handleClick = () => {
    const random = Math.floor(Math.random()*100);
    setNumSort((current) => [...current, random]);
    console.log(numSort);
  }

  return (
      <>
      <button onClick={handleClick} disabled={numSort.length < 5 ? false : true}>Genera un numero</button>
      {numSort.map((num) => {
        return (
          <div className="btn">
            <p>{num}</p>
          </div>
        );
      })}
      </>
      )
}

export default Number;

