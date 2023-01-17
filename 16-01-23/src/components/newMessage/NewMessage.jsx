import { useState } from "react";
import "./index.scss";

const NewMessage = () => {
  const [messageText, setMessageText] = useState("");

  const onHandleInput = (e) => setMessageText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="NewMessage">
        <form onSubmit={onSubmit}>
          <input
            value={messageText}
            onChange={onHandleInput}
            type="text"
            placeholder="Che c'è di nuovo?"
          />
          <input className="tw-btn" type="submit" value="Twitta" />
        </form>
      </div>
    </>
  );
};

export default NewMessage;
