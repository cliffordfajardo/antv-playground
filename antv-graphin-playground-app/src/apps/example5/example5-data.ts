import {GraphinData } from "@antv/graphin";
import { nodes, edges } from './data'

/*
This data is to render this:
- http://localhost:3000/drill_down?site=lor1&environment=x&cluster=x&pod=11&asw=lor1-x11-asw25.nw.linkedin.com
- which eventually renders this: https://imgur.com/a/dVzpZbz
    BUT^ i need to create the preset algo first. This was assesmbled with selections
*/

export const graphData:GraphinData = {
    nodes,
    edges,
}

