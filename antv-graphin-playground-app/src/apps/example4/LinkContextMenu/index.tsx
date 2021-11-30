import React from "react";
import { TagFilled, DeleteFilled, ExpandAltOutlined } from "@ant-design/icons";
import { ContextMenu } from "@antv/graphin-components";
import { message } from "antd";
const { Menu } = ContextMenu;
const MENU_OPTIONS = [
  {
    key: "tag",
    icon: <TagFilled />,
    name: "Mark",
  },
  {
    key: "delete",
    icon: <DeleteFilled />,
    name: "Delete",
  },
  {
    key: "expand",
    icon: <ExpandAltOutlined />,
    name: "Expand",
  },
];

/**
 * @decription
 * Opens menu on the canvas when option clicked
 */
export const LinkContextMenu = () => {
  const handleChange = (menuItem: any, menuData: any) => {
    message.info(`Element：${menuData.id}，Action：${menuItem.name}`);
  };

  return (
    <Menu
      options={MENU_OPTIONS.map((item) => {
        return { ...item, name: `${item.name}-EDGE` };
      })}
      onChange={handleChange}
      bindType="edge"
    />
  );
};
