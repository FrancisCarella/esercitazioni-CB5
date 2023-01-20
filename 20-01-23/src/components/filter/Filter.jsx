import { useState } from "react";
import "./index.scss";

const Filter = ({ setFilterState }) => {
  const [inputFilter, setInputFilter] = useState("");

  const onHandleInput = (e) => {
    e.preventDefault();
    setInputFilter(e.target.value);
        setFilterState(inputFilter);

  };

  const onHandleSubmit = (e) => {
    e.preventDefault();
    setFilterState(inputFilter);
  };

  return (
    <div>
      <form className="Filter" onSubmit={onHandleSubmit}>
        <input
          type="text"
          value={inputFilter}
          onChange={onHandleInput}
          placeholder="Search post..."
        />
        {/*<input className="tw-btn" type="submit" value="Search" />*/}
      </form>
    </div>
  );
};

export default Filter;
