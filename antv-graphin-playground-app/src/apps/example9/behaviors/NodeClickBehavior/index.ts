import React from 'react'
import { IG6GraphEvent, GraphinContext } from '@antv/graphin'
import { INode, NodeConfig } from '@antv/g6'

/**
 * @description
 * Registers a custom Node click behavior.
 */
const NodeClickBehavior = () => {
  const { graph } = React.useContext(GraphinContext)
  // @ts-ignore
  window.graph = graph
  // graph.cfg.edges = []; doing this in the browser developer console does't work. See the README file for Example9.

  // @ts-ignore
  window.removeItem = () => graph.removeItem('node-1'); // this will remove the item from the canvas
  // @ts-ignore
  window.setItemState = () => graph.setItemState('node-2', 'active', true); // this will remove the item from the canvas
  // @ts-ignore
  window.undoItemState = () => graph.clearItemStates('node-2'); // this will remove the item from the canvas
  // @ts-ignore
  window.clearGraphStates = () => graph.clearItemStates('node-2', ['active', 'inactive']);
  // @ts-ignore
  window.graphFindById = (nodeId:string) => graph.findById(nodeId);

  // const nodes = graph.findAllByState('node', 'selected').map(c => c.getModel());
  // const edges = graph.findAllByState('edge', 'selected').map(c => c.getModel());

  // graph.get('canvas').setCursor('crosshair')
  // graph.get('canvas').setCursor('default')

  React.useEffect(() => {
    /**
     * @description
     * When the node is clicked update the URL (for bookmarking purposes).
     * When this is triggered, it will cause a re-render to trigger
     * a refetch of our API data based on the current URL state.
     */
    const handleNodeClick = (event: IG6GraphEvent) => {
      const node = event.item as INode
      const nodeModel = node.getModel() as NodeConfig

      console.log('node clicked ->', nodeModel)
    }

    graph.on('node:click', handleNodeClick)

    return () => {
      graph.off('node:click', handleNodeClick)
    }
  }, [])

  return null
}

export default NodeClickBehavior
