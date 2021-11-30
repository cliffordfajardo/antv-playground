import React from "react";
import Graphin, { Behaviors } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { Toolbar } from "@antv/graphin-components";
import { graphData } from "./data2";
import "./styles.css";
const { ZoomCanvas, DragNode, FitView, ActivateRelations } = Behaviors;

export const PodsDataContainer2 = () => {
  return (
    <>
      <section className="example-container">
        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="Pod Container 2">
              {/* TODO open a PR with the default layout values and support any string's as well */}
              <Graphin
                data={graphData}
                layout={{
                  type: "graph-with-hierachy",
                }}
                linkCenter={true}
                defaultNode={{ type: "rect" }}
              >
                <ZoomCanvas />
                <DragNode />
                {/* Allows zoom with mouse wheel / pinch to zoom */}
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
