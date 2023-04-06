import React from "react";
import Button, { SelectButton } from "./Button";
import styles from "../styles/modules/app.module.scss";

function AppHeader() {
  return (
    <div className={styles.appHeader}>
      <Button varaiant="secondary">Add Task</Button>
      <SelectButton id="status">
        <option value="all">All</option>
        <option value="incomplete">Incomplete</option>
        <option value="complete">Complete</option>
      </SelectButton>
      TODO
    </div>
  );
}

export default AppHeader;
