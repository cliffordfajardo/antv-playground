import { GraphinData } from "@antv/graphin";
/*
 This data is to render this:
- http://localhost:3000/drill_down?site=lor1&environment=x&cluster=x&pod=1
- which eventually renders this: 
    EI:     https://imgur.com/ZUWFRZp
    graphin:
*/
const hierachyOrder = { plane: 1, csw: 2, asw: 3} as const;
type NetgraphRole = "plane" | "csw" | "asw";
export const graphData: GraphinData = {
  nodes: [
    {
      id: "fab-a",
      name: "fab-a",
      role: "plane",
      sortPriority: "1",
      label: "a",
      plane: "a",
      logical: true,
      index: 4,
      weight: 1,
      x:100,
      y:100,
    },
    {
      id: "fab-b",
      name: "fab-b",
      role: "plane",
      sortPriority: "1",
      label: "b",
      plane: "b",
      logical: true,
      index: 5,
      weight: 1,
      x:200,
      y:100,
    },
    {
      id: "fab-c",
      name: "fab-c",
      role: "plane",
      sortPriority: "1",
      label: "c",
      plane: "c",
      logical: true,
      index: 6,
      weight: 1,
      x:300,
      y:100,
    },
    {
      id: "fab-d",
      name: "fab-d",
      role: "plane",
      sortPriority: "1",
      label: "d",
      plane: "d",
      logical: true,
      index: 7,
      weight: 1,
      x:400,
      y:100,
    },
    {
      id: "lor1-x1-csw01.nw.linkedin.com",
      name: "lor1-x1-csw01.nw.linkedin.com",
      role: "csw",
      asn: 64811,
      label: "csw01",
      site: "lor1",
      environment: "x",
      deviceClass: "csw",
      cluster: "x",
      pod: 1,
      index: 0,
      weight: 1,
      x:100,
      y:200,
    },
    {
      id: "lor1-x1-csw02.nw.linkedin.com",
      name: "lor1-x1-csw02.nw.linkedin.com",
      role: "csw",
      asn: 64811,
      label: "csw02",
      site: "lor1",
      environment: "x",
      deviceClass: "csw",
      cluster: "x",
      pod: 1,
      index: 1,
      weight: 1,
      x:200,
      y:200,
    },
    {
      id: "lor1-x1-csw03.nw.linkedin.com",
      name: "lor1-x1-csw03.nw.linkedin.com",
      role: "csw",
      asn: 64811,
      label: "csw03",
      site: "lor1",
      environment: "x",
      deviceClass: "csw",
      cluster: "x",
      pod: 1,
      index: 2,
      weight: 1,
      x:300,
      y:200,
    },
    {
      id: "lor1-x1-csw04.nw.linkedin.com",
      name: "lor1-x1-csw04.nw.linkedin.com",
      role: "csw",
      asn: 64811,
      label: "csw04",
      site: "lor1",
      environment: "x",
      deviceClass: "csw",
      cluster: "x",
      pod: 1,
      index: "3",
      weight: 1,
      x:400,
      y:200,
    },
  ],
  edges: [
    {
      source: "lor1-x1-csw01.nw.linkedin.com",
      target: "fab-a",
    },
    {
      source: "lor1-x1-csw02.nw.linkedin.com",
      target: "fab-b",
    },
    {
      source: "lor1-x1-csw03.nw.linkedin.com",
      target: "fab-c",
    },
    {
      source: "lor1-x1-csw04.nw.linkedin.com",
      target: "fab-d",
    },
  ],
};

// .map((a) =>a)
// .sort((a, b) => {
//   const [aRole, bRole] = [a.role, b.role];
//   const [aOrder, bOrder] = [hierachyOrder[aRole as NetgraphRole], hierachyOrder[bRole as NetgraphRole]]
//   return aOrder - bOrder;
// })
