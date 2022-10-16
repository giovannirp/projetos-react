import Reac, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import styles from "./App.module.css";
import TaskForm from "./Components/TaskForm";
import TaskList from "./Components/TaskList";
import { ITask } from "./interfaces/Task";
import Modal from "./Components/Modal";

function App() {
  const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const deleteTask = (id: number) => {
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const hideOrShowModal = (display: boolean) => {
    const modal = document.querySelector("#modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const editTask = (task: ITask): void => {
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  return (
    <div>
      <Modal
        children={
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            task={taskToUpdate}
          />
        }
      />
      <Header />
      <main className={styles.main}>
        <div>
          <h2>o que você vai fazer?</h2>
          <TaskForm
            btnText="Criar Tarefa"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDelete={deleteTask}
            handleEdit={editTask}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
