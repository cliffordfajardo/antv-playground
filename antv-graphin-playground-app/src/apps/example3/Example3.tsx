import React from "react";
import Graphin, { Behaviors } from "@antv/graphin";
import { Row, Col, Card } from "antd";
// import { Toolbar } from "@antv/graphin-components";
import { Tooltip } from "@antv/graphin-components";
// import "./styles.css";
import { graphData } from "./example3-data";
import { NodeTooltip } from "./NodeTooltip";
const { ZoomCanvas, DragNode, FitView } = Behaviors;

export const Example3 = () => {
  return (
    <>
      <section className="example-container">
        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="Example 3">
              <Graphin
                // theme={{ mode: "dark" }}
                data={graphData}
                layout={{
                  type: "force",
                }}
                defaultNode={{ type: "rect" }}
              >
                <Tooltip bindType="node">
                  <NodeTooltip />
                </Tooltip>
                <Tooltip bindType="edge">
                  <NodeTooltip />
                </Tooltip>
                <ZoomCanvas />
                <DragNode />
                <FitView />
              </Graphin>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};
