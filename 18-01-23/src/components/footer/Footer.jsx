import "./index.scss";

function Footer() {
  return (
      <footer className="Footer">
        <div className="icon">
          <img src="img/tw-home-w.svg" alt="" />
        </div>
        <div className="icon">
          <img src="img/tw-search-w.svg" alt="" />
        </div>
        <div className="notify-container">
          <span className="notify-bubble">3</span>
          <div className="icon">
            <img src="img/tw-notify-w.svg" alt="" />
          </div>
        </div>
        <div className="icon">
          <img src="img/tw-msg-w.svg" alt="" />
        </div>
      </footer>
  );
}

export default Footer;
