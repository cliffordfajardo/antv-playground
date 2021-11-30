import React from "react";
import Graphin, { Behaviors, Utils, GraphinTreeData } from "@antv/graphin";
import { Row, Col, Card } from "antd";
import { Toolbar } from "@antv/graphin-components";
import "./styles.css";
const {
  DragCanvas,
  ZoomCanvas,
  DragNode,
  ActivateRelations,
  FitView,
  TreeCollapse,
  Hoverable,
} = Behaviors;

export const treeData: GraphinTreeData = {
  id: "Modeling Methods",
};

/**
 * NOTE
 * - 🔴 sites cannot be modeled as a Tree, because you can only pass 1 tree data structure down to graphin's data component.
 * - these need to be graph nodes that are squares
 *
 */
export const SitesContainer2 = () => {
  return (
    <>
      <section className="example-container">
        <Row gutter={16}>
          {/* https://g6.antv.vision/en/examples/tree/compactBox#tbCompactBox */}
          <Col span={12}>
            <Card title="Sites as a tree...">
              {/* TODO open a PR with the default layout values and support any string's as well */}
              <Graphin
                data={treeData}
                layout={{
                  type: "compactBox",
                  // Comment and uncomment these properties to see the change live
                  getId: function getId(d: any) {
                    return d.id;
                  },
                  getHeight: function getHeight() {
                    return 16;
                  },
                  getWidth: function getWidth() {
                    return 56;
                  },
                  getVGap: function getVGap() {
                    return 80;
                  },
                  getHGap: function getHGap() {
                    return 20;
                  },
                }}
                linkCenter={true}
                defaultNode={{
                  size: 50,
                  type: "rect", // I was passing this in the data, but I get type errors.
                  anchorPoints: [
                    [0, 0.5],
                    [1, 0.5],
                  ],
                }}
                modes={{
                  default: [
                    {
                      type: "collapse-expand",
                      onChange: function onChange(item: any, collapsed: any) {
                        console.log("onChange inside of the `collapse-expand`");
                        const data = item.getModel();
                        data.collapsed = collapsed;
                        return true;
                      },
                    },
                    "drag-canvas",
                    "zoom-canvas",
                  ],
                }}
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
