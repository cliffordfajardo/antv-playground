import G6, { GraphData, NodeConfig, EdgeConfig } from "@antv/g6";
import "../style.css";


/*
    What is the exported G6?
    - It's simply an exported object. Its kind of like a class with static methods.
    - https://github.com/antvis/G6/blob/29db6d2a71e6d4c204f1b8bf59f2123d56c53ac4/packages/pc/src/index.ts

*/
// @ts-ignore
window.G6 = G6; // for viewing the G6 class in the browser.

const data: GraphData = {
  nodes: [
    // Part 1 - THE LOWER CASE LETTERS
    {
      id: "0",
      label: "A",
      cluster: "part1",
    },
    {
      id: "1",
      label: "B",
      cluster: "part1",
    },
    {
      id: "2",
      label: "C",
      cluster: "part1",
    },
    {
      id: "3",
      label: "D",
      cluster: "part1",
    },
    {
      id: "4",
      label: "E",
      cluster: "part1",
    },
    {
      id: "5",
      label: "F",
      cluster: "part1",
    },
    // Part 2 - THE LOWER CASE LETTERS
    {
      id: "6",
      label: "a",
      cluster: "part2",
    },
    {
      id: "7",
      label: "b",
      cluster: "part2",
    },
    {
      id: "8",
      label: "c",
      cluster: "part2",
    },
    {
      id: "9",
      label: "d",
      cluster: "part2",
    },
  ],
  edges: [
    {
      source: "0",
      target: "6",
    },
    {
      source: "0",
      target: "7",
    },
    {
      source: "0",
      target: "9",
    },
    {
      source: "1",
      target: "6",
    },
    {
      source: "1",
      target: "9",
    },
    {
      source: "1",
      target: "7",
    },
    {
      source: "2",
      target: "8",
    },
    {
      source: "2",
      target: "9",
    },
    {
      source: "2",
      target: "6",
    },
    {
      source: "3",
      target: "8",
    },
    {
      source: "4",
      target: "6",
    },
    {
      source: "4",
      target: "7",
    },
    {
      source: "5",
      target: "9",
    },
  ],
};

/**
 * @description
 * Register a custom layout for use within the G6 library.
 * https://github.com/antvis/G6/blob/58ae097c5120cfe6324a3eb5dec384cd32469c15/packages/pc/src/layout/index.ts
 *
 * Lifecycle Information
 * 1. The custom layout gets registered first so it gets added to G6 global.
 * 2. When we instantiate the G6 visualization `new G6.Graph({ layout:{type: 'bigraph-layout'}})` it will
 *    find the layout & execute it with the configuration data that was passed to the
 *    the new G6 class instance we just instantiated above
 *
 *
 * After invoking this method, this will create an entry inside of the G6.Layout
 * object with a key of `bigraph-layout` &  the value being a class which does the layout.
 *
 * TODO:
 * create a figma mind map showing how all this is conntected. Under the hood, this uses the
 * @antv/layout package: https://github.com/antvis/G6/blob/58ae097c5120cfe6324a3eb5dec384cd32469c15/packages/pc/src/layout/index.ts#L18
 * 
 * 
 * 
 * 
 * WHAT THIS LAYOUT DOES
 * Bigraph is the graph with nodes divided into 2 parts. 
 * 	1. There will be no edges between the nodes which are belong to the same part. 
 * 	2. We sort the nodes according to their topology to reduce the edge crossings.
 */


G6.registerLayout("bigraph-layout", {
  /**
   * @description
   * Called immediately during initialization of the layout
	 * This contains data like: {nodes: [], edges: [], ...}. TODO: find a way to type this.
	 * 
	 * 🔴 - if I uncomment `init` it breaks the layout....we need docs around this behavior.
   */
  // init(data: Record<string, unknown>) {
  //   // console.log(`INIT --> data: `, data);
  // },

  /** @description
   * Executes the layout
   */
  execute() {
    const gLayout = this;
		// extract values from tje configuration we passed in
    const center = gLayout.center || [0, 0]; // This refers to the X,Y coordinate which represent the center of the graph. This value is auto calculated (if we don't specify it in the config)
    const biSep = gLayout.biSep || 100;
    const nodeSep = gLayout.nodeSep || 20;
    const nodeSize = gLayout.nodeSize || 20;
    const direction = gLayout.direction || "horizontal";
    let part1Pos = 0;
    let part2Pos = 0;

    if (direction === "horizontal") {
      part1Pos = center[0] - biSep / 2;
      part2Pos = center[0] + biSep / 2;

			debugger
    }

    const { nodes, edges } = gLayout; // 🔴 These should be typed by the G6 library. Create a PR to `type` gLayout. OR maybe there's already a type for the object (2nd param of `registerLayout`)...NOPE,layoutoverride is set to any.

    const part1Nodes = [] as NodeConfig[]; // Left Side Nodes
    const part2Nodes = [] as EdgeConfig[]; // Right Side Nodes
    const part1NodeMap = new Map();
    const part2NodeMap = new Map();

    // Separate the P1 & P2 nodes & put them in their respective arrayy & map. This also sets up their initial positions ................................................ TODO: recommendation for useful pattern. For the node create a key called metaData. That way its easier to type metadata?
    (nodes as NodeConfig[]).forEach((node: any, i: number) => {
      if (node.cluster === "part1") {
        part1Nodes.push(node);
        part1NodeMap.set(node.id, i);
      } else {
        part2Nodes.push(node);
        part2NodeMap.set(node.id, i);
      }
    });
		console.log({part1Nodes, part1NodeMap, part2Nodes, part2NodeMap})

    // Order the part1 node
    part1Nodes.forEach((p1Node) => {
      let index = 0;
      let adjCount = 0;

      edges.forEach((edge: any) => {
        const sourceId = edge.source;
        const targetId = edge.target;
        if (sourceId === p1Node.id) {
          index += part2NodeMap.get(targetId);
          adjCount += 1;
        } else if (targetId === p1Node.id) {
          index += part2NodeMap.get(sourceId);
          adjCount += 1;
        }
      });
      index /= adjCount;
      p1Node.index = index;
    });

    part1Nodes.sort((a, b) => {
      // @ts-ignore
      return a.index - b.index;
    });

    part2Nodes.forEach((p2Node) => {
      let index = 0;
      let adjCount = 0;

      edges.forEach((edge: any) => {
        const sourceId = edge.source;
        const targetId = edge.target;

        if (sourceId === p2Node.id) {
          index += part1NodeMap.get(targetId);
          adjCount += 1;
        } else if (targetId === p2Node.id) {
          index += part1NodeMap.get(sourceId);
          adjCount += 1;
        }
      });

      index /= adjCount;
      p2Node.index = index;
    });

    part2Nodes.sort((a, b) => {
      // @ts-ignore
      return a.index - b.index;
    });

    // place the nodes on the cavas by updating their X & Y coordinates
    const heightLength = Math.max(part1Nodes.length, part2Nodes.length);

		const height = heightLength * (nodeSep + nodeSize);
    
		let begin = center[1] - height / 2; // Start position in canvas from the center. Seems to be the Y start coordinate . Recall center is an array [x:number, y:number]
		// let begin = 300
		if (direction === "vertical") {
      begin = center[0] - height / 2;
    }

    part1Nodes.forEach((node, i) => {
			// These need better variable names! like Xcoord & Ycoord
      if (direction === "horizontal") {
        node.x = part1Pos;
        node.y = begin + i * (nodeSep + nodeSize);
      } else {
        node.x = begin + i * (nodeSep + nodeSize);
        node.y = part1Pos;
      }
    });
    part2Nodes.forEach((node, i) => {
      if (direction === "horizontal") {
        node.x = part2Pos;
        node.y = begin + i * (nodeSep + nodeSize);
      } else {
        node.x = begin + i * (nodeSep + nodeSize);
        node.y = part2Pos;
      }
    });
  },
});

const container = document.getElementById("g6-canvas-container") as HTMLElement;
const width = container.scrollWidth;
const height = container.scrollHeight || 500;
const graph = new G6.Graph({
  container,
  width,
  height,
	// fitView: true,
  layout: {
    type: "bigraph-layout",
    biSep: 300, 		// The hortizontal distance in px separating these 2 columns  ...https://g6.antv.vision/en/docs/manual/middle/layout/custom-layout ... this needs more explanation in the docs..where is the origin point?
    nodeSep: 20,		// The vertical separation/distance in px separating each nodes in the same column ...........https://g6.antv.vision/en/docs/api/graphLayout/dagre#layoutcfgnodesep
    nodeSize: 10,		// diameter of the node. It is used for preventing node overlaps................https://g6.antv.vision/en/docs/api/graphLayout/force#layoutcfgnodesize
  },
  animate: true,
  defaultNode: {
    size: 20,
    style: {
      fill: "#C6E5FF",
      stroke: "#5B8FF9",
    },
  },
  defaultEdge: {
    size: 1,
    color: "#e2e2e2",
  },
  modes: {
    default: ["drag-canvas", "zoom-canvas", 'drag-node'], // TODO: OS contrib: the array of values should be typed
  },
});
graph.data(data);
graph.render();

if (typeof window !== "undefined")
  window.onresize = () => {
    if (!graph || graph.get("destroyed")) return;
    if (!container || !container.scrollWidth || !container.scrollHeight) return;
    graph.changeSize(container.scrollWidth, container.scrollHeight);
  };
