import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

import styles from "./TaskForm.module.css";

import { ITask } from "../interfaces/Task";

type Props = {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(
    id: number,
    title: string,
    email: string,
    difficulty: number
  ): void;
};

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  task,
  handleUpdate,
}: Props) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [difficulty, setDifficulty] = useState<number>(0);

  useEffect(() => {
    if (task) {
      setId(task.id);
      setTitle(task.title);
      setEmail(task.email);
      setDifficulty(task.difficulty);
    }
  }, [task]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (handleUpdate) {
      console.log(handleUpdate);
      handleUpdate(id, title, email, difficulty);
    } else {
      const id = Math.floor(Math.random() * 1000);

      const newTask: ITask = { id, title, email, difficulty };

      setTaskList!([...taskList, newTask]);

      setTitle("");
      setDifficulty(0);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
  };

  console.log(email)
  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da terfa"
          onChange={handleChange}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          placeholder="Email da terfa"
          onChange={handleChange}
          value={email}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dificullty">Dificuldade:</label>
        <input
          type="text"
          name="dificullty"
          placeholder="Dificuldade da terfa"
          onChange={handleChange}
          value={difficulty}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
