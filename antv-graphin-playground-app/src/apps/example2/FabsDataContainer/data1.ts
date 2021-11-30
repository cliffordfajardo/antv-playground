/*
https://garuda.stg.linkedin.com/drill_down#site:lva1;environment:p;cluster:pc;plane:a
EI: https://imgur.com/J3kWwN3 (plane a)
EI: https://imgur.com/dOFVJRI (plane b)
local: https://imgur.com/nIPIJXN (plane c)
local: https://imgur.com/yidx1st (plane d)

maind iff between EI and local is that EI will ad the plane
in the image as the root node, me local code doesnt do that.
O well for now

*/
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
        "id": "lva1-pb-a-fab01.nw.linkedin.com",
        "name": "lva1-pb-a-fab01.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020513,
        "label": "fab01",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 0,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab02.nw.linkedin.com",
        "name": "lva1-pb-a-fab02.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020513,
        "label": "fab02",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 1,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab03.nw.linkedin.com",
        "name": "lva1-pb-a-fab03.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020513,
        "label": "fab03",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 2,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab04.nw.linkedin.com",
        "name": "lva1-pb-a-fab04.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020513,
        "label": "fab04",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 3,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab05.nw.linkedin.com",
        "name": "lva1-pb-a-fab05.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020513,
        "label": "fab05",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 4,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab06.nw.linkedin.com",
        "name": "lva1-pb-a-fab06.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020513,
        "label": "fab06",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 5,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab07.nw.linkedin.com",
        "name": "lva1-pb-a-fab07.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020513,
        "label": "fab07",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 6,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab08.nw.linkedin.com",
        "name": "lva1-pb-a-fab08.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020513,
        "label": "fab08",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 7,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab09.nw.linkedin.com",
        "name": "lva1-pb-a-fab09.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020521,
        "label": "fab09",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 8,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab10.nw.linkedin.com",
        "name": "lva1-pb-a-fab10.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020522,
        "label": "fab10",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 9,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab11.nw.linkedin.com",
        "name": "lva1-pb-a-fab11.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020523,
        "label": "fab11",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 10,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab12.nw.linkedin.com",
        "name": "lva1-pb-a-fab12.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020524,
        "label": "fab12",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 11,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab13.nw.linkedin.com",
        "name": "lva1-pb-a-fab13.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020525,
        "label": "fab13",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 12,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab14.nw.linkedin.com",
        "name": "lva1-pb-a-fab14.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020526,
        "label": "fab14",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 13,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab15.nw.linkedin.com",
        "name": "lva1-pb-a-fab15.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020527,
        "label": "fab15",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 14,
        "weight": 1,
    },
    {
        "id": "lva1-pb-a-fab16.nw.linkedin.com",
        "name": "lva1-pb-a-fab16.nw.linkedin.com",
        "role": "fab",
        "asn": 4220020528,
        "label": "fab16",
        "site": "lva1",
        "environment": null,
        "deviceClass": "fab",
        "cluster": "pb",
        "pod": null,
        "index": 15,
        "weight": 1,
    },
    // -------------------
    {
        "id": "pods",
        "name": "pods",
        "role": "pod",
        "label": "pods",
        "cluster": "pb",
        "logical": true,
        "index": 16,
        "weight": 16,
    },
    {
        "id": "a",
        "name": "a",
        "role": "rfab",
        "label": "a",
        "environment": "p",
        "logical": true,
        "index": 16,
        "weight": 16,
    },
]
// .map((a) =>a)
// .sort((a, b) => {
//   const [aRole, bRole] = [a.role, b.role];
//   const [aOrder, bOrder] = [hierachyOrder[aRole as NetgraphRole], hierachyOrder[bRole as NetgraphRole]]
//   return aOrder - bOrder;
// })

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
            "source": "lva1-pb-a-fab01.nw.linkedin.com",
            "target": "a"
        },
        {
            "source": "lva1-pb-a-fab02.nw.linkedin.com",
            "target": "a"
        },
        {
            "source": "lva1-pb-a-fab03.nw.linkedin.com",
            "target": "a"
        },
        {
            "source": "lva1-pb-a-fab04.nw.linkedin.com",
            "target": "a"
        },
        {
            "source": "lva1-pb-a-fab05.nw.linkedin.com",
            "target": "a"
        },
        {
            "source": "lva1-pb-a-fab06.nw.linkedin.com",
            "target": "a"
        },
        {
            "source": "lva1-pb-a-fab07.nw.linkedin.com",
            "target": "a"
        },
        {
            "source": "lva1-pb-a-fab08.nw.linkedin.com",
            "target": "a"
        },
        {
            "source": "lva1-pb-a-fab01.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab02.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab03.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab04.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab05.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab06.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab07.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab08.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab09.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab10.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab11.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab12.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab13.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab14.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab15.nw.linkedin.com",
            "target": "pods"
        },
        {
            "source": "lva1-pb-a-fab16.nw.linkedin.com",
            "target": "pods"
        }
  ],
};