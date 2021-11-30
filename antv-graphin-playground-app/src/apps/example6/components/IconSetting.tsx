// @ts-nocheck
import * as React from "react";
import { Radio, Input, InputNumber } from "antd";
import Item from "./Item";
import {
  FontSizeOutlined,
  LinkOutlined,
  AppstoreAddOutlined,
} from "@ant-design/icons";
import GraphinColorPick from "./ColorPicker";
import { NodeStyle } from "@antv/graphin";

interface IconSettingProps extends NodeStyleIcon {
  handleChange: (schena: { icon: NodeStyleIcon }) => void;
}

export type NodeStyleIcon = Partial<NodeStyle["icon"]>;

const IconSetting = (props: IconSettingProps) => {
  const { handleChange, fill, size, type: IconType } = props;

  const [state, setState] = React.useState({
    type: IconType,
    types: [
      {
        id: "font",
        name: "Font Icon",
      },
      {
        id: "image",
        name: "Picture",
      },
      {
        id: "text",
        name: "text",
      },
    ],
  });

  const { type, types } = state;

  const handleChangeType = (v) => {
    setState({
      ...state,
      type: v.target.value,
    });
  };

  const handleChangeValue = (e) => {
    handleChange({
      icon: {
        type,
        value: e.target.value,
      },
    });
  };

  return (
    <>
      <Item title="Type">
        <Radio.Group
          defaultValue={type}
          size="small"
          style={{ width: "100%" }}
          onChange={handleChangeType}
        >
          {types.map((item) => {
            return (
              <Radio.Button value={item.id} key={item.id}>
                {item.name}
              </Radio.Button>
            );
          })}
        </Radio.Group>
      </Item>

      {type === "image" && (
        <Item title="The map's address">
          <Input
            size="small"
            placeholder="Enter picture address"
            prefix={<LinkOutlined />}
            onPressEnter={handleChangeValue}
          />
        </Item>
      )}
      {type === "text" && (
        <Item title="Text content">
          <Input
            size="small"
            placeholder="Input text"
            prefix={<FontSizeOutlined />}
            onPressEnter={handleChangeValue}
          />
        </Item>
      )}

      {/** TODO:change to online searchable icon */}
      {type === "font" && (
        <Item title="Font Icon">
          <Input
            size="small"
            placeholder="Enter Icon"
            prefix={<AppstoreAddOutlined />}
            onPressEnter={handleChangeValue}
          />
        </Item>
      )}
      <Item title="size">
        <InputNumber
          size="small"
          min={1}
          max={100000}
          defaultValue={size as number}
          onChange={(e) => {
            handleChange({
              icon: {
                size: Number(e),
              },
            });
          }}
        />
      </Item>
      <Item title="Fill color">
        <GraphinColorPick
          color={fill as string}
          onChange={(val) => {
            handleChange({
              icon: {
                fill: val,
              },
            });
          }}
        />
      </Item>
    </>
  );
};

export default IconSetting;
