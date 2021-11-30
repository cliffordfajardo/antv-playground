import { GraphinData } from "@antv/graphin";

/*
http://localhost:3000/drill_down?site=lva1&environment=p&cluster=pb
EI: https://imgur.com/ibHmLMS
*/
const hierachyOrder = { plane: 1, pod: 2 } as const;
type NetgraphRole = "plane" | "pod";
const nodes = [
{
      id: "1",
      label: "1",
      role: "pod", // custom property
    },
    {
      id: "2",
      label: "2",
      role: "pod", // custom property
    },
    {
      id: "3",
      label: "3",
      role: "pod", // custom property
    },
    {
      id: "4",
      label: "4",
      role: "pod", // custom property
    },
    {
      id: "5",
      label: "5",
      role: "pod", // custom property
    },
    {
      id: "6",
      label: "6",
      role: "pod", // custom property
    },
    {
      id: "7",
      label: "7",
      role: "pod", // custom property
    },
    {
      id: "8",
      label: "8",
      role: "pod", // custom property
    },
    {
      id: "9",
      label: "9",
      role: "pod", // custom property
    },
    {
      id: "10",
      label: "10",
      role: "pod", // custom property
    },
    {
      id: "11",
      label: "11",
      role: "pod", // custom property
    },
    {
      id: "12",
      label: "12",
      role: "pod", // custom property
    },
    {
      id: "13",
      label: "13",
      role: "pod", // custom property
    },
    {
      id: "14",
      label: "14",
      role: "pod", // custom property
    },
    {
      id: "15",
      label: "15",
      role: "pod", // custom property
    },
    {
      id: "16",
      label: "16",
      role: "pod", // custom property
    },
    {
      id: "17",
      label: "17",
      role: "pod", // custom property
    },
    {
      id: "18",
      label: "18",
      role: "pod", // custom property
    },
    {
      id: "19",
      label: "19",
      role: "pod", // custom property
    },
    {
      id: "20",
      label: "20",
      role: "pod", // custom property
    },
    {
      id: "21",
      label: "21",
      role: "pod", // custom property
    },
    {
      id: "22",
      label: "22",
      role: "pod", // custom property
    },
    {
      id: "23",
      label: "23",
      role: "pod", // custom property
    },
    {
      id: "24",
      label: "24",
      role: "pod", // custom property
    },
    {
      id: "25",
      label: "25",
      role: "pod", // custom property
    },
    {
      id: "26",
      label: "26",
      role: "pod", // custom property
    },
    {
      id: "27",
      label: "27",
      role: "pod", // custom property
    },
    {
      id: "28",
      label: "28",
      role: "pod", // custom property
    },
    {
      id: "29",
      label: "29",
      role: "pod", // custom property
    },
    {
      id: "30",
      label: "30",
      role: "pod", // custom property
    },
    {
      id: "31",
      label: "31",
      role: "pod", // custom property
    },
    {
      id: "32",
      label: "32",
      role: "pod", // custom property
    },
    {
      id: "33",
      label: "33",
      role: "pod", // custom property
    },
    {
      id: "34",
      label: "34",
      role: "pod", // custom property
    },
    {
      id: "35",
      label: "35",
      role: "pod", // custom property
    },
    {
      id: "36",
      label: "36",
      role: "pod", // custom property
    },
    {
      id: "37",
      label: "37",
      role: "pod", // custom property
    },
    {
      id: "38",
      label: "38",
      role: "pod", // custom property
    },
    {
      id: "39",
      label: "39",
      role: "pod", // custom property
    },
    {
      id: "40",
      label: "40",
      role: "pod", // custom property
    },
    {
      id: "41",
      label: "41",
      role: "pod", // custom property
    },
    {
      id: "42",
      label: "42",
      role: "pod", // custom property
    },
    {
      id: "43",
      label: "43",
      role: "pod", // custom property
    },
    {
      id: "44",
      label: "44",
      role: "pod", // custom property
    },
    {
      id: "45",
      label: "45",
      role: "pod", // custom property
    },
    {
      id: "46",
      label: "46",
      role: "pod", // custom property
    },
    {
      id: "47",
      label: "47",
      role: "pod", // custom property
    },
    {
      id: "48",
      label: "48",
      role: "pod", // custom property
    },
    //
    // Planes....... how do we group these separately? Specifically planes above
    {
      id: "a",
      label: "a",
      role: "plane", // custom property
    },
    {
      id: "b",
      label: "c",
      role: "plane", // custom property
    },
    {
      id: "c",
      label: "c",
      role: "plane", // custom property
    },
    {
      id: "d",
      label: "d",
      role: "plane", // custom property
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
  edges: [],
};
