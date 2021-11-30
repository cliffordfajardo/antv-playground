import React from "react";
import Graphin, { Behaviors } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { Toolbar, Tooltip } from "@antv/graphin-components";
import { graphData } from "./data1";
import "./styles.css";
import { NodeTooltip } from "../SitesContainer/components/NodeTooltip";
const { ZoomCanvas, DragNode, ActivateRelations, FitView } = Behaviors;

export const EnvironmentsDataContainer1 = () => {
  return (
    <>
      <section className="example-container">
        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="EnvironmentsData 1">
              {/* TODO open a PR with the default layout values and support any string's as well */}
              <Graphin
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
                {/* <FitView /> */}
                <Tooltip bindType="node">
                  <NodeTooltip />
                </Tooltip>
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
