import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import styles from "./App.module.css";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";


function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>o que você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
