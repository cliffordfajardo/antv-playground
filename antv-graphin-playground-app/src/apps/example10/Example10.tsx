import React from "react";
import Graphin, { Behaviors, GraphinData } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { useGraphin } from "./context/GraphinProvider";
import SetupUseGraphinHook from "./behaviors/setupUseGraphinHook";
const { ZoomCanvas } = Behaviors;

export const graphData: GraphinData = {
  /**
   * Nodes to place in the canvas
   */
  nodes: [
    {
      id: "node-0",
      x: 100,
      y: 100,
      type: "rect", // OPTIONAL you can define the shape of each node on a per node basis!
      label: "node-0", // OPTIONAL, you can define the text inside on a per node basis
      style: {
        // OPTIONAL
        // The style for the keyShape
        fill: "lightblue",
        stroke: "#888",
        lineWidth: 1,
        radius: 7,
      },
    },
    {
      id: "node-1",
    },
    {
      id: "node-2",
      type: "rect",
      label: "node-2",
    },
  ],

  /**
   * To create relations you need to reference the nodes by their ID.
   * This will automatically add the lines
   */
  edges: [
    {
      source: "node-0",
      target: "node-1",
    },
  ],
};

export const Example10 = () => {
  const { isGraphinReady, graph } = useGraphin();

  // @ts-ignore
  window.graph = graph;
  // @ts-ignore
  window.removeItem = () => graph.removeItem("node-1"); // this will remove the item from the canvas
  // @ts-ignore
  window.setItemState = () => graph.setItemState("node-2", "active", true); // this will remove the item from the canvas
  // @ts-ignore
  window.undoItemState = () => graph.clearItemStates("node-2"); // this will remove the item from the canvas
  // @ts-ignore
  window.clearGraphStates = () =>
    // @ts-ignore
    graph.clearItemStates("node-2", ["active", "inactive"]);
  // @ts-ignore
  window.graphFindById = (nodeId: string) => graph.findById(nodeId);

  return (
    <>
      <section style={{ marginTop: 40 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Example 10" style={{ border: "2px solid black" }}>
              <Graphin data={graphData} layout={{ type: "preset" }}>
                <SetupUseGraphinHook />
                <ZoomCanvas />
              </Graphin>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};
