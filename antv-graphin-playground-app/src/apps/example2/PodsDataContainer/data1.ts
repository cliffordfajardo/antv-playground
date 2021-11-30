import {GraphinData } from "@antv/graphin";
/*
This data is to render this:
- http://localhost:3000/drill_down?site=lor1&environment=x&cluster=x&pod=11&asw=lor1-x11-asw25.nw.linkedin.com
- which eventually renders this: https://imgur.com/a/dVzpZbz
    BUT^ i need to create the preset algo first. This was assesmbled with selections
*/
const hierachyOrder = { plane: 1, csw: 2, asw: 3} as const;
type NetgraphRole = "plane" | "csw" | "asw";
export const graphData:GraphinData = {
    "nodes": [
        // ------------------------ PLANES FIRST
        {
            "id": "fab-a",
            "name": "fab-a",
            "role": "plane",
            "sortPriority": 1,
            "label": "a",
            "plane": "a",
            "logical": true,
            "weight": 1,
        },
        {
            "id": "fab-b",
            "name": "fab-b",
            "role": "plane",
            "sortPriority": 1,
            "label": "b",
            "plane": "b",
            "logical": true,
            "weight": 1,
        },
        {
            "id": "fab-c",
            "name": "fab-c",
            "role": "plane",
            "sortPriority": 1,
            "label": "c",
            "plane": "c",
            "logical": true,
            "weight": 1,
        },
        {
            "id": "fab-d",
            "name": "fab-d",
            "role": "plane",
            "sortPriority": 1,
            "label": "d",
            "plane": "d",
            "logical": true,
            "weight": 1,
        },
        // ------------------------ CSW 2nd
        {
            "id": "lor1-x11-csw01.nw.linkedin.com",
            "name": "lor1-x11-csw01.nw.linkedin.com",
            "role": "csw",
            "sortPriority": 3,
            "asn": 64821,
            "label": "csw01",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "csw",
            "cluster": "x",
            "pod": 11,
        },
        {
            "id": "lor1-x11-csw02.nw.linkedin.com",
            "name": "lor1-x11-csw02.nw.linkedin.com",
            "role": "csw",
            "sortPriority": 3,
            "asn": 64821,
            "label": "csw02",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "csw",
            "cluster": "x",
            "pod": 11,
        },
        {
            "id": "lor1-x11-csw03.nw.linkedin.com",
            "name": "lor1-x11-csw03.nw.linkedin.com",
            "role": "csw",
            "sortPriority": 3,
            "asn": 64821,
            "label": "csw03",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "csw",
            "cluster": "x",
            "pod": 11,
        },
        {
            "id": "lor1-x11-csw04.nw.linkedin.com",
            "name": "lor1-x11-csw04.nw.linkedin.com",
            "role": "csw",
            "sortPriority": 3,
            "asn": 64821,
            "label": "csw04",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "csw",
            "cluster": "x",
            "pod": 11,
        },
        {
            "id": "lor1-x11-asw01.nw.linkedin.com",
            "name": "lor1-x11-asw01.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw01",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw02.nw.linkedin.com",
            "name": "lor1-x11-asw02.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw02",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw03.nw.linkedin.com",
            "name": "lor1-x11-asw03.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw03",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw04.nw.linkedin.com",
            "name": "lor1-x11-asw04.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw04",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw05.nw.linkedin.com",
            "name": "lor1-x11-asw05.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw05",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw06.nw.linkedin.com",
            "name": "lor1-x11-asw06.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw06",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw07.nw.linkedin.com",
            "name": "lor1-x11-asw07.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw07",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw08.nw.linkedin.com",
            "name": "lor1-x11-asw08.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw08",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw09.nw.linkedin.com",
            "name": "lor1-x11-asw09.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw09",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw10.nw.linkedin.com",
            "name": "lor1-x11-asw10.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw10",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw11.nw.linkedin.com",
            "name": "lor1-x11-asw11.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw11",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw12.nw.linkedin.com",
            "name": "lor1-x11-asw12.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw12",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw13.nw.linkedin.com",
            "name": "lor1-x11-asw13.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw13",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw14.nw.linkedin.com",
            "name": "lor1-x11-asw14.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw14",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw15.nw.linkedin.com",
            "name": "lor1-x11-asw15.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw15",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw16.nw.linkedin.com",
            "name": "lor1-x11-asw16.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw16",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw17.nw.linkedin.com",
            "name": "lor1-x11-asw17.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw17",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw18.nw.linkedin.com",
            "name": "lor1-x11-asw18.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw18",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw19.nw.linkedin.com",
            "name": "lor1-x11-asw19.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw19",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw20.nw.linkedin.com",
            "name": "lor1-x11-asw20.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw20",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw21.nw.linkedin.com",
            "name": "lor1-x11-asw21.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw21",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw22.nw.linkedin.com",
            "name": "lor1-x11-asw22.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw22",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw23.nw.linkedin.com",
            "name": "lor1-x11-asw23.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw23",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw24.nw.linkedin.com",
            "name": "lor1-x11-asw24.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw24",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw25.nw.linkedin.com",
            "name": "lor1-x11-asw25.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw25",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw26.nw.linkedin.com",
            "name": "lor1-x11-asw26.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw26",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw27.nw.linkedin.com",
            "name": "lor1-x11-asw27.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw27",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw28.nw.linkedin.com",
            "name": "lor1-x11-asw28.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw28",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw29.nw.linkedin.com",
            "name": "lor1-x11-asw29.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw29",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw30.nw.linkedin.com",
            "name": "lor1-x11-asw30.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw30",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw31.nw.linkedin.com",
            "name": "lor1-x11-asw31.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw31",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },
        {
            "id": "lor1-x11-asw32.nw.linkedin.com",
            "name": "lor1-x11-asw32.nw.linkedin.com",
            "role": "asw",
            "sortPriority": 5,
            "asn": 64821,
            "label": "asw32",
            "site": "lor1",
            "environment": "x",
            "deviceClass": "asw",
            "cluster": "x",
            "pod": 11,
            "weight": 4,
        },

    ],
    "edges": [
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "fab-a"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "fab-b"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "fab-c"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "fab-d"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw01.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw02.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw03.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw04.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw05.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw06.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw07.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw08.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw09.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw10.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw11.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw12.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw13.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw14.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw15.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw16.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw17.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw18.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw19.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw20.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw21.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw22.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw23.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw24.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw25.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw26.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw27.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw28.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw29.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw30.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw31.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw01.nw.linkedin.com",
            "target": "lor1-x11-asw32.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw01.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw02.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw03.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw04.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw05.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw06.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw07.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw08.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw09.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw10.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw11.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw12.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw13.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw14.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw15.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw16.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw17.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw18.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw19.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw20.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw21.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw22.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw23.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw24.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw25.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw26.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw27.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw28.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw29.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw30.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw31.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw02.nw.linkedin.com",
            "target": "lor1-x11-asw32.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw01.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw02.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw03.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw04.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw05.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw06.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw07.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw08.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw09.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw10.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw11.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw12.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw13.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw14.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw15.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw16.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw17.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw18.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw19.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw20.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw21.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw22.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw23.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw24.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw25.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw26.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw27.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw28.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw29.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw30.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw31.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw03.nw.linkedin.com",
            "target": "lor1-x11-asw32.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw01.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw02.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw03.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw04.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw05.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw06.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw07.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw08.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw09.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw10.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw11.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw12.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw13.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw14.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw15.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw16.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw17.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw18.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw19.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw20.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw21.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw22.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw23.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw24.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw25.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw26.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw27.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw28.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw29.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw30.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw31.nw.linkedin.com"
        },
        {
            "source": "lor1-x11-csw04.nw.linkedin.com",
            "target": "lor1-x11-asw32.nw.linkedin.com"
        }
    ],
}
// .map((a) =>a)
// .sort((a, b) => {
//   const [aRole, bRole] = [a.role, b.role];
//   const [aOrder, bOrder] = [hierachyOrder[aRole as NetgraphRole], hierachyOrder[bRole as NetgraphRole]]
//   return aOrder - bOrder;
// })
