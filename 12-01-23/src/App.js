import "./App.css";
import { useState } from "react";
import { Cards } from "./components/credit-cards/Card";
import { Counter } from "./components/counter/Counter";
import { DefaultLayout } from "./layout/default-layout/DefaultLayout";
import { Container } from "./layout/container/Container";
import { ComponentSelector } from "./select/Select";
import { DefaultComponent } from "./select/Default";

const componentMap = {
  counter: Counter,
  cards: Cards,
  default: DefaultComponent,
};

function App() {
  const [componentToRender, setComponentToRender] = useState("default");

  const selectChangeHandler = (event) => {
    setComponentToRender(event.target.value);
  };

  const DynamicComponent = componentMap[componentToRender];

  return (
    <div className="App">
      <DefaultLayout>
        <main>
          <div className="Todo-container">
            <Container>
              <ComponentSelector selectChangeHandler={selectChangeHandler} />
              <DynamicComponent />
            </Container>
          </div>
        </main>
      </DefaultLayout>
    </div>
  );
}

export default App;
