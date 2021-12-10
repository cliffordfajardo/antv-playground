import React from 'react'
import { GraphinContext } from '@antv/graphin'
import { useGraphin } from '../../context/GraphinProvider'

/**
 * @description
 * Registers a custom Node click behavior.
 */
const SetupUseGraphinHook = () => {
  const { setGraphinContext } = useGraphin();
  const { graph, apis, layout, theme, } = React.useContext(GraphinContext)

  React.useEffect(() => {
    setGraphinContext({graph, apis, layout, theme, isGraphinReady: graph !== null})
  }, [graph, apis, layout, theme, setGraphinContext])

  return null
}

export default SetupUseGraphinHook
