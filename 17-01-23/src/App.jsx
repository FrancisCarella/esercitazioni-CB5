import "./App.css";
import Header from "./components/header";
import PostForm from "./components/postForm";
import SuggestedUsersList from "./components/suggestedUsersList";
import PostCardsList from "./components/postCardsList";
import BtnPost from "./components/btnPost";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <PostForm />
      <SuggestedUsersList />
      <PostCardsList />
      <BtnPost />
      <Footer />
    </div>
  );
}

export default App;
