import { NodeConfig } from "@antv/g6-core";
import { groupBy } from "../../../utils";
import { NETGRAPH_ROLE_ORDER_MAP, NetgraphRole } from "../../../types";

export const sortNodesByRole = (nodes: NodeConfig[], roleOrderMap=NETGRAPH_ROLE_ORDER_MAP) => {
  return nodes
    .map((node) => node)
    .sort((nodeA, nodeB) => {
      const nodeAOrderNum = NETGRAPH_ROLE_ORDER_MAP[nodeA.role as NetgraphRole];
      const nodeBOrderNum = NETGRAPH_ROLE_ORDER_MAP[nodeB.role as NetgraphRole];
      return nodeAOrderNum - nodeBOrderNum;
    });
};

type HierachialLayoutNodeLayoutOptions = {
  NODE_HORIZONTAL_SPACE?: number;
  NODE_VERTICAL_SPACE?: number;
  MAX_NODES_PER_ROW_COUNT?: number;
};

/**
 * @description
 * Takes in a list of node' object's & adds `x` & `y` proerties with values to them
 * so they can be positioned on the canvas.
 *
 * This method modifies the actual nodes
 */
export const applyOrderedHierarchicalNodeLayout = (
  nodes: any,
  nodeOptions?: HierachialLayoutNodeLayoutOptions
) => {
  
  let nodesByRoleGroup = groupBy(nodes, (n: any) => n.role);
  const defaultNodeOptions = {
    MAX_NODES_PER_ROW_COUNT: 10,
    NODE_HORIZONTAL_SPACE: 100,
    NODE_VERTICAL_SPACE: 100,
  } as Required<HierachialLayoutNodeLayoutOptions>;
  const _nodeOptions = {...defaultNodeOptions, ...nodeOptions};

  const {
    NODE_HORIZONTAL_SPACE,
    NODE_VERTICAL_SPACE,
    MAX_NODES_PER_ROW_COUNT,
  } = _nodeOptions;

  let sortedRoleKeys = Object.keys(NETGRAPH_ROLE_ORDER_MAP);
  const NEW_ROW_NODE_X_START_POSITION = 100;
  let nodeCurrentXPosition = 100;
  let nodeCurrentYPostition = 100;

  sortedRoleKeys.forEach((role) => {
    const nodes = nodesByRoleGroup[role] || [];
    nodes.forEach((node: any, currentNodeIndex) => {
      const isNewRowIndex =
        currentNodeIndex % MAX_NODES_PER_ROW_COUNT === 0 &&
        currentNodeIndex !== 0;
      if (isNewRowIndex) {
        nodeCurrentXPosition = NEW_ROW_NODE_X_START_POSITION;
        nodeCurrentYPostition += NODE_VERTICAL_SPACE;
      }
      node.x = nodeCurrentXPosition;
      node.y = nodeCurrentYPostition;
      nodeCurrentXPosition += NODE_HORIZONTAL_SPACE;
    });

    // After we finishing iterating over a particular type of nodeList, increment the Y position so the next set of nodes start at a new line in the canvas
    // Only increment Y if we successfully iterated over a node group.
    if (nodes.length) {
      nodeCurrentXPosition = NEW_ROW_NODE_X_START_POSITION;
      nodeCurrentYPostition += NODE_VERTICAL_SPACE;
    }
  });

  return nodes; // should i create a shallow copy of the nodes?
};
