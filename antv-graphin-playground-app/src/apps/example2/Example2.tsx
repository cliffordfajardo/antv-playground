import React from "react";
import Graphin, { NodeConfig } from "@antv/graphin";

import { SitesContainer1 } from "./SitesContainer/SitesContainer1";
import { EnvironmentsContainer1 } from "./EnvironmentsContainer/EnvironmentsContainer1";
import { EnvironmentsDataContainer1 } from "./EnvironmentsDataContainer/EnviornmentsDataContainer1";
import { ClusterDataContainer1 } from "./ClusterDataContainer/ClusterDataContainer1";
import { ClusterDataContainer2 } from "./ClusterDataContainer/ClusterDataContainer2";
import "./styles.css";
import { PodsDataContainer1 } from "./PodsDataContainer/PodsDataContainer1";
import { PodsDataContainer2 } from "./PodsDataContainer/PodsDataContainer2";
import { EnvironmentsDataContainer2 } from "./EnvironmentsDataContainer/EnvironmentsDataContainer2";
import { FabsDataContainer1 } from "./FabsDataContainer/FabsDataContainer1";
import { applyOrderedHierarchicalNodeLayout } from "../example5/utils";

Graphin.registerLayout("graph-with-hierachy", {
  init(data: any) {
    // alert(1);
    const self = this;
    const nodes = data.nodes as NodeConfig[];
    self.nodes = applyOrderedHierarchicalNodeLayout(nodes);
  },
});

export const Example2 = () => {
  return (
    <>
      <SitesContainer1 />
      <EnvironmentsContainer1 />
      <EnvironmentsDataContainer1 />
      <EnvironmentsDataContainer2 />
      <ClusterDataContainer1 />
      <ClusterDataContainer2 />
      <PodsDataContainer1 />
      <PodsDataContainer2 />
      <FabsDataContainer1 />
    </>
  );
};
