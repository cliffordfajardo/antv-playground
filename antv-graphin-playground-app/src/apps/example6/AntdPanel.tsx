/* eslint-disable no-undef */
import React from "react";
import { Collapse, Card, Tabs, Switch } from "antd";
import { GraphinContext } from "@antv/graphin";
import LabelSetting from "./components/LabelSetting";
import IconSetting from "./components/IconSetting";
import KeyShapeSetting from "./components/KeyShapeSetting";
import HaloSetting from "./components/HaloSetting";

const { Panel } = Collapse;
const { TabPane } = Tabs;

const handleChangeTheme = (checked: any) => {
  // dom  is a link to a file style
  // eslint-disable-next-line no-undef
  const dom = window.document.getElementById("theme-style") as HTMLLinkElement;
  const cssUrl = checked
    ? "https://gw.alipayobjects.com/os/lib/antd/4.6.6/dist/antd.css"
    : "https://gw.alipayobjects.com/os/lib/antd/4.6.6/dist/antd.dark.css";

  if (dom) {
    dom.href = cssUrl;
  } else {
    // 创建一个 stylesheet 文件链接，动态 append 到 body 中
    // eslint-disable-next-line no-undef
    const style = document.createElement("link");
    style.type = "text/css";
    style.rel = "stylesheet";
    style.id = "theme-style";
    style.href = cssUrl;
    if (document.body.append) {
      document.body.append(style);
    } else {
      document.body.appendChild(style);
    }
  }
};
// interface AntdPanelProps {
//   nodeStyleSchema: NodeStyle;
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   handleNodeStyleChange: (value: any) => void;
// }

const AntdPanel = () => {
  const graphin = React.useContext(GraphinContext);

  const { nodeStyleSchema, handleNodeStyleChange } = graphin.visSettingPanel;
  const { label, icon, keyshape } = nodeStyleSchema;
  const handleChange = (shema: any) => {
    handleNodeStyleChange(shema);
  };

  return (
    <div>
      <Card
        title="Visual configuration panel"
        bordered={false}
        style={{ width: 350 }}
        bodyStyle={{ padding: "0px 12px" }}
        extra={
          <Switch
            checkedChildren="light"
            unCheckedChildren="dark"
            onChange={handleChangeTheme}
            defaultChecked
          />
        }
      >
        <Tabs defaultActiveKey="node">
          <TabPane tab="Node" key="node">
            <Collapse defaultActiveKey={["keyshape"]} bordered={false}>
              <Panel header="Node" key="keyshape">
                <KeyShapeSetting handleChange={handleChange} {...keyshape} />
              </Panel>
              <Panel header="Halo" key="halo">
                <HaloSetting handleChange={handleChange} {...keyshape} />
              </Panel>
              <Panel header="Label" key="label">
                <LabelSetting handleChange={handleChange} {...label} />
              </Panel>
              <Panel header="Icon" key="icon">
                <IconSetting handleChange={handleChange} {...icon} />
              </Panel>
              <Panel header="Badges" key="badges" />
            </Collapse>
          </TabPane>
          <TabPane tab="Edge" key="evidge" />
        </Tabs>
      </Card>
    </div>
  );
};

export default AntdPanel;
