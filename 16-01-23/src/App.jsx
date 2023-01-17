import "./App.css";
import Header from "./components/header/index";
import NewMessage from "./components/newMessage/index";
import MessagesList from "./components/messagesList/index";
import NewPost from "./components/newPost/index";
import Footer from "./components/footer/index";

function App() {
  return (
    <div className="App">
      <Header />
      <NewMessage />
      <MessagesList />
      <NewPost />
      <Footer />
    </div>
  );
}

export default App;
