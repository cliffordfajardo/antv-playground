import React from "react";
import Graphin, { Behaviors } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { Toolbar } from "@antv/graphin-components";
import "./styles.css";
import { graphData } from "./data2";
const { ZoomCanvas, DragNode, FitView } = Behaviors;

export const ClusterDataContainer2 = () => {
  return (
    <>
      <section className="ClusterDataContainer (pods and plane)">
        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="EnvironmentsData (pods y cluster)">
              {/* TODO open a PR with the default layout values and support any string's as well */}
              <Graphin
                data={graphData}
                animate={true}
                layout={{
                  type: "graph-with-hierachy",
                }}
                defaultNode={{ type: "rect" }}
              >
                <ZoomCanvas />
                <DragNode />
                {/* Allows zoom with mouse wheel / pinch to zoom */}
                <FitView />
                <Toolbar />
              </Graphin>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};
