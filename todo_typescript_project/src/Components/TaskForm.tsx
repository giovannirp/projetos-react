import React from "react";

import styles from "./TaskForm.module.css";

type Props = {
  btnText: string;
};

const TaskForm = ({ btnText }: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título:</label>
        <input type="text" name="title" placeholder="Título da terfa" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="dificullty">Dificuldade:</label>
        <input
          type="text"
          name="dificullty"
          placeholder="Dificuldade da terfa"
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
