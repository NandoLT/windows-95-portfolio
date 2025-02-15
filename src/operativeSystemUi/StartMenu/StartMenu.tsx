"use client";

import { List } from "@react95/core";

import MenuItems from "./MenuItems";
import startMenuConfig from "./utils/startMenuConfig";

const StartMenu = () => {
  return (
    <List width={"200px"}>
      <MenuItems items={startMenuConfig} />
    </List>
  );
};

export default StartMenu;
