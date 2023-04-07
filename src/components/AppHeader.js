import React, { useState } from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";
import TodoModel from "./TodoModel";

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={styles.appHeader}>
      <Button varaiant="secondary" onClick={() => setModalOpen(true)}>
        Add Task
      </Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      <TodoModel modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
}

export default AppHeader;
