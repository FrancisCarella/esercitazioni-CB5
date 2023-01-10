import React, { useState } from "react";
import "./App.css";
import Number from "./components/number/Number";
import { DefaultLayout } from "./layout/default-layout/DefaultLayout";
import { Container } from "./layout/container/Container";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <main>
          <div className="Todo-container">
            <Container>
              <Number />
            </Container>
          </div>
        </main>
      </DefaultLayout>
    </div>
  );
}

export default App;
