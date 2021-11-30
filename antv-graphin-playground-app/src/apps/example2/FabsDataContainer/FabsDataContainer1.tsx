import React from "react";
import Graphin, { Behaviors } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { Toolbar } from "@antv/graphin-components";
import { graphData } from "./data1";
import "./styles.css";
const { ZoomCanvas, DragNode, ActivateRelations, FitView } = Behaviors;

export const FabsDataContainer1 = () => {
  return (
    <>
      <section className="example-container">
        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="Fabs Data 1">
              {/* TODO open a PR with the default layout values and support any string's as well */}
              <Graphin
                data={graphData}
                layout={{
                  type: "graph-with-hierachy",
                }}
                linkCenter={true}
                fitCenter={true}
                // ^^
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
