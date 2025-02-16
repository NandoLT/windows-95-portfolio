import { List } from "@react95/core";

import { MenuItem } from "./utils/startMenuConfig";

interface MenuItemsProps {
  items: Record<string, MenuItem>;
}

const MenuItems: React.FC<MenuItemsProps> = ({ items }) => {
  return (
    <>
      {Object.keys(items).map((key) => {
        const item = items[key];

        return (
          <>
            {item.isSectionDivider && <List.Divider key={`${key}_divider`} />}
            <List.Item key={key} icon={item.icon} onClick={item.onClick}>
              {item.name}
              {item.subItems && Object.keys(item.subItems).length > 0 && (
                <List width={"200px"}>
                  <MenuItems items={item.subItems} />
                </List>
              )}
            </List.Item>
          </>
        );
      })}
    </>
  );
};

export default MenuItems;
