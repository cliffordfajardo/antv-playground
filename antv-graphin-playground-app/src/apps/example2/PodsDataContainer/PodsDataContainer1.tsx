import React from "react";
import Graphin, { Behaviors, GraphinData, Utils } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { Toolbar } from "@antv/graphin-components";
import { graphData } from "./data1";
import "./styles.css";
const { ZoomCanvas, DragNode, FitView, ActivateRelations } = Behaviors;

export const PodsDataContainer1 = () => {
  return (
    <>
      <section className="example-container">
        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="Pod Container 1">
              {/* TODO open a PR with the default layout values and support any string's as well */}
              <Graphin
                data={graphData}
                layout={{
                  type: "graph-with-hierachy",
                }}
                linkCenter={true}
                defaultNode={{ type: "rect" }}
                fitCenter={true}
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
