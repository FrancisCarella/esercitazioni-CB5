import "./index.scss";

const SuggestedUser = ({ data }) => {
  const { image, firstName, lastName } = data;

  return (
    <div className="SuggestedUser">
      <div>
        <div>
          <input className="close-btn" type="submit" value="x" />
        </div>
        <img src={image} alt={lastName} />
        <div className="textContent">
          <h5>{`${firstName} ${lastName}`}</h5>
          <h6>@{firstName}</h6>
        </div>
      </div>
      <div>
        <input className="tw-btn" type="submit" value="Follow" />
      </div>
    </div>
  );
};

export default SuggestedUser;
