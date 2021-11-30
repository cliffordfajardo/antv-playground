import React from "react";
import Graphin, { Behaviors, NodeConfig } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { Toolbar, Tooltip } from "@antv/graphin-components";
import { graphData } from "./example5-data";
import { applyOrderedHierarchicalNodeLayout } from "./utils";
import { NodeTooltip } from "./components/NodeTooltip";
const { ZoomCanvas, DragNode, FitView, ActivateRelations } = Behaviors;

// Graphin.registerLayout("graph-with-hierachy", {
//   init(data: any) {
//     const self = this;
//     const nodes = data.nodes as NodeConfig[];
//     self.nodes = applyOrderedHierarchicalNodeLayout(nodes);
//   },
// });

export const Example5 = () => {
  return (
    <>
      <section className="example-container">
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Example 5">
              <Graphin
                data={graphData}
                layout={{
                  type: "graph-with-hierachy",
                  // type: "preset",
                  // type: "dagre", // we cant use dagre because we need the nodes in a specific hierachy ... TODO create a github issues & ask for suggestions
                }}
                linkCenter={true}
                defaultNode={{ type: "rect" }}
                fitCenter={true}
              >
                <Tooltip bindType="node">
                  <NodeTooltip />
                </Tooltip>
                <ZoomCanvas />
                <DragNode />
                <FitView />
                <Toolbar />
                <ActivateRelations />
              </Graphin>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};
