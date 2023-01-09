import React, { useState } from 'react';
import data from "./data.json";
import "./App.css";
import { DefaultLayout } from './layout/default-layout/DefaultLayout';
import { Container } from "./layout/container/Container";
import ToDoList from "./components/todo/ToDoList";

function App() {
    
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
    }

  return (
    <>
      <div className="App">
        <DefaultLayout >
        <main>
          <div className='Todo-container'>
          <Container>
            <ToDoList toDoList={toDoList} handleToggle={handleToggle}/>
          </Container>
          </div>
        </main>
        </DefaultLayout>
      </div>
    </>
  );
}

export default App;
