import "./index.scss";
import { useState, useEffect } from "react";
import { POST } from "../../utils/http";

const PostForm = () => {
  const [messageText, setMessageText] = useState("");
  const [authorText, setAuthorText] = useState("");
  const [titleText, setTitleText] = useState("");
  const [urlText, setUrlText] = useState("");

  const [messagePost, setMessagePost] = useState({});

  const onHandleMessageText = (e) => setMessageText(e.target.value);
  const onHandleAuthorText = (e) => setAuthorText(e.target.value);
  const onHandleTitleText = (e) => setTitleText(e.target.value);
  const onHandleUrlText = (e) => setUrlText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setMessagePost({
      id: 1,
      userId: 9,
      image: urlText,
      firstName: authorText,
      title: titleText,
      body: messageText,
    });
  };

  useEffect(() => {
    if (messagePost.firstName && messagePost.title)
      POST("posts/add", messagePost); /*.then(() => {
        console.log("Post Inviata");*/
  }, [messagePost]);
  /*});*/
  return (
    <>
      <div className="PostForm">
        <form onSubmit={onSubmit}>
          <input
            value={authorText}
            onChange={onHandleAuthorText}
            type="text"
            placeholder="Author..."
            required
          />
          <input
            value={urlText}
            onChange={onHandleUrlText}
            type="text"
            placeholder="Image Author..."
            required
          />
          <input
            value={titleText}
            onChange={onHandleTitleText}
            type="text"
            placeholder="Title..."
            required
          />
          <input
            value={messageText}
            onChange={onHandleMessageText}
            type="text"
            placeholder="What's happened?"
            required
          />
          <input className="tw-btn" type="submit" value="Tweet" />
        </form>
      </div>
    </>
  );
};

export default PostForm;
