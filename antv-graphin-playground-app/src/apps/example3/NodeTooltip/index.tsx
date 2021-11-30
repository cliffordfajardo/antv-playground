import { GraphinContext } from "@antv/graphin";
import React from "react";
import { Card } from "antd";

/**
 * @description
 * Tooltip to display when a node is hovered over.
 */
export const NodeTooltip = () => {
  const { tooltip } = React.useContext(GraphinContext);
  const context = tooltip.node; // TODO: add types here in the source code
  const { item } = context;
  const model = item && item.getModel();
  console.log(`model??? --->`, model);
  return (
    <>
      <Card title="Node Information" style={{ width: "200px" }}>
        <h1>ID : {model?.id}</h1>
      </Card>
    </>
  );
};
