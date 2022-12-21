export function Button() {
  const message = (e) => {
    e.preventDefault();
    console.log("Ciao! Sono un Hello Word in console!");
    document.querySelector("#message").classList.add('message-on');
  setTimeout(function() {
  setTimeout(function() {
  document.querySelector("#message").classList.remove('message-on');
  },2_000)
  document.querySelector("#message").classList.add('fadeinout');
  },5_000)
  };
  return (
      <button
          aria-label="Click me for show a message"
          className="btn"
          onClick={message}
      >
        Click me and wait five seconds!
      </button>
  );
}
