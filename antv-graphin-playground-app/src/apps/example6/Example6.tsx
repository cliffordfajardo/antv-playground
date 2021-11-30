import React from "react";
import Graphin, { Utils } from "@antv/graphin";
import { VisSettingPanel } from "@antv/graphin-components";
import AntdPanel from "./AntdPanel";

export const Example6 = () => {
  return (
    <div className="App">
      <Graphin
        data={Utils.mock(2).circle().graphin()}
        theme={{ mode: "light" }}
      >
        <VisSettingPanel>
          <AntdPanel />
        </VisSettingPanel>
      </Graphin>
    </div>
  );
};
