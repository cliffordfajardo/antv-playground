import React from "react";
import { GraphinContext } from "@antv/graphin";
import { ContextMenu } from "@antv/graphin-components";
import { message } from "antd";

const { Menu } = ContextMenu;

/**
 * @decription
 * Opens menu on the canvas when option clicked
 */
export const CanvasContextMenu = () => {
  const { graph, contextmenu } = React.useContext(GraphinContext);

  const context = contextmenu.canvas;

  const handleDownload = () => {
    graph.downloadFullImage("canvas-contextmenu");
    context.handleClose();
  };
  const handleClear = () => {
    message.info(`Canvas cleared successfully`);
    context.handleClose();
  };
  const handleStopLayout = () => {
    message.info(`停止布局成功`);
    context.handleClose();
  };

  return (
    <Menu bindType="canvas">
      <Menu.Item onClick={handleClear}>Clear Canvas</Menu.Item>
      <Menu.Item onClick={handleStopLayout}>Stop Layout</Menu.Item>
      <Menu.Item onClick={handleDownload}>Download Canvas</Menu.Item>
    </Menu>
  );
};
