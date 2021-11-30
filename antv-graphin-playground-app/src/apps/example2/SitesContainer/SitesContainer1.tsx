import React from "react";
import Graphin, { Behaviors, NodeConfig } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { Toolbar, Tooltip } from "@antv/graphin-components";
import { graphData } from "./data";
import "./styles.css";
import { applyOrderedHierarchicalNodeLayout } from "../../example5/utils";
import { NodeTooltip } from "./components/NodeTooltip";
const { ZoomCanvas, DragNode, FitView, ActivateRelations } = Behaviors;

// Graphin.registerLayout("graph-with-hierachy", {
//   init(data: any) {
//     const self = this;
//     const nodes = data.nodes as NodeConfig[];
//     debugger;
//     self.nodes = applyOrderedHierarchicalNodeLayout(nodes);
//   },
// });

export const SitesContainer1 = () => {
  return (
    <>
      <section className="example-container">
        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="Sites">
              {/* TODO open a PR with the default layout values and support any string's as well */}
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
