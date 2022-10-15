import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";

import styles from "./TaskForm.module.css";

import { ITask } from "../interfaces/Task";

type Props = {
  btnText: string;
};

const TaskForm = ({ btnText }: Props) => {
  const [id, setId] = useState<Number>(0);
  const [title, setTitle] = useState<string>("");
  const [dificullty, setDifficulty] = useState<number>(0);

  const addTaskHandler = () => {};

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDifficulty(parseInt(e.target.value));
    }
    console.log(title);
    console.log(dificullty);
  };

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          placeholder="Título da terfa"
          onChange={handleChange}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dificullty">Dificuldade:</label>
        <input
          type="text"
          name="dificullty"
          placeholder="Dificuldade da terfa"
          onChange={handleChange}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
