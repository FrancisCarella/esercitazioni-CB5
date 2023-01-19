import "./index.scss";

const BtnPost = ({ isModalEnabled, funcPostForm }) => {
  return (
    <div className="BtnPostContainer">
      <div onClick={funcPostForm} className="btnPost">
        {isModalEnabled ? "x" : "+"}
      </div>
    </div>
  );
};

export default BtnPost;
