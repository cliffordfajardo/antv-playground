import { GraphinData } from "@antv/graphin";

/**
Renders the first example
- https://iwww.corp.linkedin.com/wiki/cf/pages/viewpage.action?spaceKey=IEO&title=Network+Topology+Service+-++UI+Requests
- https://imgur.com/Tn1xr6a
- http://localhost:3000/drill_down?site=lor1&environment=x
*/
const hierachyOrder = { dcr: 1, rfab: 2, cluster: 3 } as const;
type NetgraphRole = "dcr" | "cluster" | 'rfab';
// TODO: 🔴 create the generic algorithm for this
const nodes = [
    {
      id: "dcr01",
      label: "dcr01",
      role: "dcr", // CUSTOM
    },
    {
      id: "dcr02",
      label: "dcr02",
      role: "dcr", // CUSTOM
    },
    {
      id: "dcr03",
      label: "dcr03",
      role: "dcr", // CUSTOM
    },
    {
      id: "dcr04",
      label: "dcr04",
      role: "dcr", // CUSTOM
    },
    {
      id: "x",
      label: "x",
      role: "cluster", // CUSTOM
    },
]
.map((a) =>a)
.sort((a, b) => {
  const [aRole, bRole] = [a.role, b.role];
  const [aOrder, bOrder] = [hierachyOrder[aRole as NetgraphRole], hierachyOrder[bRole as NetgraphRole]]
  return aOrder - bOrder;
})

export const graphData: GraphinData = {
  /**
   * Nodes to place in the canvas
   */
  nodes,
  /**
   * To create relations you need to reference the nodes by their ID.
   * This will automatically add the lines
   */
  edges: [
    {
      source: "x",
      target: "dcr01",
    },
    {
      source: "x",
      target: "dcr02",
    },
    {
      source: "x",
      target: "dcr03",
    },
    {
      source: "x",
      target: "dcr04",
    },
  ],
};