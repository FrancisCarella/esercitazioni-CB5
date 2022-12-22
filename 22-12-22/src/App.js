import "./App.css";
import { Button } from "./atoms/button/Button";
import { Text } from "./atoms/text/Text";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Container } from "./layout/container/Container";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main>
          <Container>
            <img src="fdcc-logo.png" className="App-logo" alt="logo" />
          </Container>
          <Container>
            <Text as='h1'
              content="Hello World! I'm Francesco De Caro Carella!">
            </Text>
          </Container>
          <div>
            <Text
              as="h2"
              content="Quizzone 2022 - Parte 2°"
              variant="title"
            ></Text>
            <Text
              as="h3"
              content="A quando risale la scoperta dell'America?"
            ></Text>
            <div className="btns-container">
              <Button
                variant=""
                children="1492"
                onClick={() => {
                  console.log("Hai vinto!");
                  alert("Hai vinto!");
                }}
              />
              <Button
                variant="primary"
                children="1942"
                onClick={() => {
                  console.log("Hai perso!");
                  alert("Hai perso!");
                }}
              />
              <Button
                variant="secundary"
                children="1429"
                onClick={() => {
                  console.log("Hai perso!");
                  alert("Hai perso!");
                }}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
