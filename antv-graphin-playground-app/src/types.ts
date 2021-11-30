export type NetgraphRole =
  | 'main'
  | 'site'
  | 'environment'
  | 'cluster'
  | 'plane'
  | 'pod'
  | 'rfab'
  | 'dcr'
  | 'asw'
  | 'fab'
  | 'csw';
export const NETGRAPH_ROLE_ORDER_MAP = {
  main: 0,
  site: 1,
  pop: 2,
  environment: 3,
  dcr: 4,
  crt: 5,
  rfab: 6,
  cluster: 7,
  plane: 8,
  fab: 9,
  pod: 10,
  csw: 11,
  agg: 12,
  asw: 13,
} as const;
