import React from "react";
import Graphin, { Behaviors, GraphinData, Utils } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { Toolbar, Tooltip } from "@antv/graphin-components";
import "./styles.css";
import { NodeTooltip } from "../SitesContainer/components/NodeTooltip";
const { ZoomCanvas, DragNode, FitView } = Behaviors;

/*
 - 🔴 free floating "solo" notes. Ex: https://g6.antv.vision/en/examples/net/forceDirected#forceBubbles
*/

export const graphData: GraphinData = {
  /**
   * Nodes to place in the canvas
   */
  nodes: [
    {
      id: "a",
      label: "a",
      role: "environment",
    },
    {
      id: "b",
      label: "b",
      role: "environment",
    },
    {
      id: "c",
      label: "c",
      role: "environment",
    },
    {
      id: "d",
      label: "d",
      role: "environment",
    },
    {
      id: "e",
      label: "e",
      role: "environment",
    },
  ],

  /**
   * To create relations you need to reference the nodes by their ID.
   * This will automatically add the lines
   */
  edges: [], // there are not edges for sites!
};

export const EnvironmentsContainer1 = () => {
  return (
    <>
      <section className="example-container">
        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="Enviornments">
              {/* TODO open a PR with the default layout values and support any string's as well */}
              <Graphin
                // theme={{ mode: "dark" }}
                data={graphData}
                layout={{
                  type: "graph-with-hierachy",
                }}
                linkCenter={true}
                fitCenter={true}
                defaultNode={{ type: "rect" }}
              >
                <ZoomCanvas />
                <DragNode />
                {/* Allows zoom with mouse wheel / pinch to zoom */}
                <FitView />
                <Toolbar />
                <Tooltip bindType="node">
                  <NodeTooltip />
                </Tooltip>
              </Graphin>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};
