import React from "react";
import Graphin, { Behaviors } from "@antv/graphin";
import { Row, Col, Card } from "antd";
// import { Toolbar } from "@antv/graphin-components";
import { ContextMenu } from "@antv/graphin-components";
// import "./styles.css";
import { graphData } from "./example4-data";
import { CanvasContextMenu } from "./CanvasContextMenu";
import { LinkContextMenu } from "./LinkContextMenu";
import { NodeContextMenu } from "./NodeContextMenu";
const { ZoomCanvas, DragNode, FitView } = Behaviors;

export const Example4 = () => {
  return (
    <>
      <section className="example-container">
        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="Example 4">
              <Graphin
                // theme={{ mode: "dark" }}
                data={graphData}
                layout={{
                  type: "force",
                }}
                defaultNode={{ type: "rect" }}
              >
                {/* MENU 1 */}
                <ContextMenu style={{ width: "80px" }} bindType="canvas">
                  <CanvasContextMenu />
                </ContextMenu>

                <ContextMenu style={{ width: "120px" }} bindType="edge">
                  <LinkContextMenu />
                </ContextMenu>

                <ContextMenu style={{ width: "80px" }}>
                  <NodeContextMenu />
                </ContextMenu>

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
