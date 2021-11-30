import React from "react";
import Graphin, { Behaviors, GraphinData, GraphinContext } from "@antv/graphin";
import { Row, Col, Card } from "antd";
const { ZoomCanvas, DragNode, FitView } = Behaviors;

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

export const Example7 = () => {
  const { graph } = React.useContext(GraphinContext);
  graph.on("node:click", (node: any) => {
    console.log("clicked node--->", node);
  });
  return (
    <>
      <section style={{ marginTop: 40 }}>
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Example 1" style={{ border: "2px solid black" }}>
              <Graphin data={graphData} layout={{ type: "preset" }}>
                <ZoomCanvas />
              </Graphin>
            </Card>
          </Col>
        </Row>
      </section>

      <section className="example-container">
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Example 2: dagre layout">
              {/* TODO open a PR with the default layout values and support any string's as well */}
              <Graphin data={graphData} layout={{ type: "dagre" }}>
                {/* <ZoomCanvas disabled /> */}
                <ZoomCanvas />
                {/* Allows zoom with mouse wheel / pinch to zoom */}
              </Graphin>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};
