import React, { useState } from "react";
import "./App.css";
import { Cards } from "./components/credit-cards/Card";
import { DefaultLayout } from "./layout/default-layout/DefaultLayout";
import { Container } from "./layout/container/Container";

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <main>
          <div className="Todo-container">
            <Container>
              <Cards />
            </Container>
          </div>
        </main>
      </DefaultLayout>
    </div>
  );
}

export default App;
