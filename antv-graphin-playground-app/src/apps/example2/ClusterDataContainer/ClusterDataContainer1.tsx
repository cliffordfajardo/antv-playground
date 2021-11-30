import React from "react";
import Graphin, { Behaviors, GraphinContext } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { Toolbar } from "@antv/graphin-components";
import "./styles.css";
import { graphData } from "./data";
const { ZoomCanvas, DragNode, FitView, ActivateRelations } = Behaviors;

const CustomComponents = () => {
  // As long as the components wrapped in Graphin, you can obtain graph instances and apis provided by Graphin through Context
  const { graph, apis } = React.useContext(GraphinContext);
  return null;
};

export const ClusterDataContainer1 = () => {
  return (
    <>
      <section className="ClusterDataContainer (pods and plane)">
        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="ClusterData1">
              {/* TODO open a PR with the default layout values and support any string's as well */}
              <Graphin
                data={graphData}
                animate={true}
                layout={{
                  type: "graph-with-hierachy",
                  // type: "preset",
                  preventOverlap: true,
                }}
                defaultNode={{ type: "rect" }}
              >
                <ZoomCanvas />
                <DragNode />
                {/* Allows zoom with mouse wheel / pinch to zoom */}
                <FitView />
                <Toolbar />
                <CustomComponents />
                <ActivateRelations />
              </Graphin>
            </Card>
          </Col>
        </Row>
      </section>
    </>
  );
};
