import React from "react";
import Graphin, { Behaviors, GraphinData } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { treeData } from "./tree-data";
import "./styles.css";
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
      x: 200,
      y: 200,
    },
    {
      id: "node-2",
      x: 100,
      y: 300,
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

export const Example1 = () => {
  return (
    <>
      <section className="example-container">
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Example 1" style={{ border: "2px solid black" }}>
              <Graphin data={graphData} layout={{ type: "preset" }}>
                {/* <ZoomCanvas disabled /> */}
                <ZoomCanvas />
                {/* Allows zoom with mouse wheel / pinch to zoom */}
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

      <section className="example-container">
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Example 3: Tree layout without type=`compact box`">
              {/* TODO open a PR with the default layout values and support any string's as well */}
              <Graphin data={treeData} layout={{ type: "compactBox" }}>
                {/* <ZoomCanvas disabled /> */}
                <ZoomCanvas />
                {/* Allows zoom with mouse wheel / pinch to zoom */}
              </Graphin>
            </Card>
          </Col>
        </Row>

        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="Example 3: Tree layout with collapsable nodes">
              {/* TODO open a PR with the default layout values and support any string's as well */}
              <Graphin
                data={treeData}
                layout={{
                  type: "compactBox",
                  // preset: {
                  //   type: "concentric",
                  // },
                  // Comment and uncomment these properties to see the change live
                  getId: function getId(d: any) {
                    return d.id;
                  },
                  getHeight: function getHeight() {
                    return 16;
                  },
                  getWidth: function getWidth() {
                    return 56;
                  },
                  getVGap: function getVGap() {
                    return 80;
                  },
                  getHGap: function getHGap() {
                    return 20;
                  },
                }}
                linkCenter={true}
                defaultNode={{
                  size: 50,
                  // type: "rect", // I was passing this in the data, but I get type errors.
                  anchorPoints: [
                    [0, 0.5],
                    [1, 0.5],
                  ],
                }}
                modes={{
                  default: [
                    {
                      type: "collapse-expand",
                      onChange: function onChange(item: any, collapsed: any) {
                        console.log("onChange inside of the `collapse-expand`");
                        const data = item.getModel();
                        data.collapsed = collapsed;
                        return true;
                      },
                    },
                    "drag-canvas",
                    "zoom-canvas",
                  ],
                }}
              >
                {/* <ZoomCanvas disabled /> */}
                <ZoomCanvas />
                {/* Allows zoom with mouse wheel / pinch to zoom */}
                <FitView />
                <DragNode />
              </Graphin>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};
