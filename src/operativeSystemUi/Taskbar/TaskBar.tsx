"use client";

import W95Menu from "@operativeSystemUi/w95Menu/w95Menu";
import { TaskBar } from "@react95/core";

const Taskbar = () => {
  return (
    <div className="App" style={{ width: "300px" }}>
      <TaskBar
        list={<W95Menu />}
      />
    </div>
  );
}

export default Taskbar;
