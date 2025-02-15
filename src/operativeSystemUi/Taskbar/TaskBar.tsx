"use client";

import StartMenu from "@operativeSystemUi/StartMenu/StartMenu";
import { TaskBar } from "@react95/core";

const Taskbar = () => {
  return (
    <div className="App" style={{ width: "300px" }}>
      <TaskBar list={<StartMenu />} />
    </div>
  );
};

export default Taskbar;
