import { GraphinData } from "@antv/graphin";

/**
Renders the first example
- https://iwww.corp.linkedin.com/wiki/cf/pages/viewpage.action?spaceKey=IEO&title=Network+Topology+Service+-++UI+Requests
- https://imgur.com/yHVA185
- http://localhost:3000/drill_down?site=lca1&environment=c
*/

// TODO create the JSON data
const hierachyOrder = { dcr: 1, rfab: 2, cluster: 3 } as const;
type NetgraphRole = "dcr" | "cluster" | 'rfab';
// TODO: 🔴 create the generic algorithm for this
const nodes = [
  {
    id: "lca1-dcr01.nw.linkedin.com",
    name: "lca1-dcr01.nw.linkedin.com",
    role: "dcr",
    asn: 64777,
    label: "dcr01",
    site: "lca1",
    environment: null,
    deviceClass: "dcr",
    cluster: null,
    pod: null,
    weight: 4,
  },
  {
    id: "lca1-dcr02.nw.linkedin.com",
    name: "lca1-dcr02.nw.linkedin.com",
    role: "dcr",
    asn: 64777,
    label: "dcr02",
    site: "lca1",
    environment: null,
    deviceClass: "dcr",
    cluster: null,
    pod: null,
    weight: 4,
  },
  {
    id: "lca1-dcr03.nw.linkedin.com",
    name: "lca1-dcr03.nw.linkedin.com",
    role: "dcr",
    asn: 64777,
    label: "dcr03",
    site: "lca1",
    environment: null,
    deviceClass: "dcr",
    cluster: null,
    pod: null,
    weight: 4,
  },
  {
    id: "lca1-dcr04.nw.linkedin.com",
    name: "lca1-dcr04.nw.linkedin.com",
    role: "dcr",
    asn: 64777,
    label: "dcr04",
    site: "lca1",
    environment: null,
    deviceClass: "dcr",
    cluster: null,
    pod: null,
    weight: 4,
  },
  {
    id: "lca1-c-rfab01.nw.linkedin.com",
    name: "lca1-c-rfab01.nw.linkedin.com",
    role: "rfab",
    asn: 4220430001,
    label: "rfab01",
    site: "lca1",
    environment: "c",
    deviceClass: "rfab",
    cluster: "c",
    pod: null,
    plane: "a",
    weight: 7,
  },
  {
    id: "lca1-c-rfab02.nw.linkedin.com",
    name: "lca1-c-rfab02.nw.linkedin.com",
    role: "rfab",
    asn: 4220430001,
    label: "rfab02",
    site: "lca1",
    environment: "c",
    deviceClass: "rfab",
    cluster: "c",
    pod: null,
    plane: "a",
    weight: 7,
  },
  {
    id: "lca1-c-rfab03.nw.linkedin.com",
    name: "lca1-c-rfab03.nw.linkedin.com",
    role: "rfab",
    asn: 4220430001,
    label: "rfab03",
    site: "lca1",
    environment: "c",
    deviceClass: "rfab",
    cluster: "c",
    pod: null,
    plane: "a",
    weight: 7,
  },
  {
    id: "lca1-c-rfab04.nw.linkedin.com",
    name: "lca1-c-rfab04.nw.linkedin.com",
    role: "rfab",
    asn: 4220430001,
    label: "rfab04",
    site: "lca1",
    environment: "c",
    deviceClass: "rfab",
    cluster: "c",
    pod: null,
    plane: "a",
    weight: 7,
  },
  {
    id: "lca1-c-rfab05.nw.linkedin.com",
    name: "lca1-c-rfab05.nw.linkedin.com",
    role: "rfab",
    asn: 4220430001,
    label: "rfab05",
    site: "lca1",
    environment: "c",
    deviceClass: "rfab",
    cluster: "c",
    pod: null,
    plane: "a",
    weight: 0,
  },
  {
    id: "lca1-c-rfab06.nw.linkedin.com",
    name: "lca1-c-rfab06.nw.linkedin.com",
    role: "rfab",
    asn: 4220430001,
    label: "rfab06",
    site: "lca1",
    environment: "c",
    deviceClass: "rfab",
    cluster: "c",
    pod: null,
    plane: "a",
    weight: 0,
  },
  {
    id: "lca1-c-rfab07.nw.linkedin.com",
    name: "lca1-c-rfab07.nw.linkedin.com",
    role: "rfab",
    asn: 4220430001,
    label: "rfab07",
    site: "lca1",
    environment: "c",
    deviceClass: "rfab",
    cluster: "c",
    pod: null,
    plane: "a",
    weight: 0,
  },
  {
    id: "lca1-c-rfab08.nw.linkedin.com",
    name: "lca1-c-rfab08.nw.linkedin.com",
    role: "rfab",
    asn: 4220430001,
    label: "rfab08",
    site: "lca1",
    environment: "c",
    deviceClass: "rfab",
    cluster: "c",
    pod: null,
    plane: "a",
    weight: 0,
  },
  {
    id: "c",
    name: "c",
    role: "cluster",
    label: "c",
    weight: 4,
  },
  {
    id: "cb",
    name: "cb",
    role: "cluster",
    label: "cb",
    weight: 4,
  },
  {
    id: "cc",
    name: "cc",
    role: "cluster",
    label: "cc",
    weight: 4,
  },
]
.map((a) => a)
.sort((a, b) => {
const [aRole, bRole] = [a.role, b.role];
const [aOrder, bOrder] = [
  hierachyOrder[aRole as NetgraphRole],
  hierachyOrder[bRole as NetgraphRole],
];
  return aOrder - bOrder;
});

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
      source: "lca1-dcr01.nw.linkedin.com",
      target: "lca1-c-rfab01.nw.linkedin.com",
    },
    {
      source: "lca1-dcr01.nw.linkedin.com",
      target: "lca1-c-rfab02.nw.linkedin.com",
    },
    {
      source: "lca1-dcr01.nw.linkedin.com",
      target: "lca1-c-rfab03.nw.linkedin.com",
    },
    {
      source: "lca1-dcr01.nw.linkedin.com",
      target: "lca1-c-rfab04.nw.linkedin.com",
    },
    {
      source: "lca1-dcr02.nw.linkedin.com",
      target: "lca1-c-rfab01.nw.linkedin.com",
    },
    {
      source: "lca1-dcr02.nw.linkedin.com",
      target: "lca1-c-rfab02.nw.linkedin.com",
    },
    {
      source: "lca1-dcr02.nw.linkedin.com",
      target: "lca1-c-rfab03.nw.linkedin.com",
    },
    {
      source: "lca1-dcr02.nw.linkedin.com",
      target: "lca1-c-rfab04.nw.linkedin.com",
    },
    {
      source: "lca1-dcr03.nw.linkedin.com",
      target: "lca1-c-rfab01.nw.linkedin.com",
    },
    {
      source: "lca1-dcr03.nw.linkedin.com",
      target: "lca1-c-rfab02.nw.linkedin.com",
    },
    {
      source: "lca1-dcr03.nw.linkedin.com",
      target: "lca1-c-rfab03.nw.linkedin.com",
    },
    {
      source: "lca1-dcr03.nw.linkedin.com",
      target: "lca1-c-rfab04.nw.linkedin.com",
    },
    {
      source: "lca1-dcr04.nw.linkedin.com",
      target: "lca1-c-rfab01.nw.linkedin.com",
    },
    {
      source: "lca1-dcr04.nw.linkedin.com",
      target: "lca1-c-rfab02.nw.linkedin.com",
    },
    {
      source: "lca1-dcr04.nw.linkedin.com",
      target: "lca1-c-rfab03.nw.linkedin.com",
    },
    {
      source: "lca1-dcr04.nw.linkedin.com",
      target: "lca1-c-rfab04.nw.linkedin.com",
    },
    {
      source: "lca1-c-rfab01.nw.linkedin.com",
      target: "c",
    },
    {
      source: "lca1-c-rfab01.nw.linkedin.com",
      target: "cb",
    },
    {
      source: "lca1-c-rfab01.nw.linkedin.com",
      target: "cc",
    },
    {
      source: "lca1-c-rfab02.nw.linkedin.com",
      target: "c",
    },
    {
      source: "lca1-c-rfab02.nw.linkedin.com",
      target: "cb",
    },
    {
      source: "lca1-c-rfab02.nw.linkedin.com",
      target: "cc",
    },
    {
      source: "lca1-c-rfab03.nw.linkedin.com",
      target: "c",
    },
    {
      source: "lca1-c-rfab03.nw.linkedin.com",
      target: "cb",
    },
    {
      source: "lca1-c-rfab03.nw.linkedin.com",
      target: "cc",
    },
    {
      source: "lca1-c-rfab04.nw.linkedin.com",
      target: "c",
    },
    {
      source: "lca1-c-rfab04.nw.linkedin.com",
      target: "cb",
    },
    {
      source: "lca1-c-rfab04.nw.linkedin.com",
      target: "cc",
    },
  ],
};
