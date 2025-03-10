import type { NodeTypes } from '@xyflow/react';
import { PositionLoggerNode } from './PositionLoggerNode';
import GroupNode from "../components/GroupNode.tsx";

import { AppNode } from './types';

export const initialNodes: AppNode[] = [
  {
    id: 'a',
    type: 'input',
    position: { x: 0, y: 0 },
    data: { label: 'Node 1' },
  },
  {
    id: 'b',
    type: 'position-logger',
    position: { x: -100, y: 100 },
    data: { label: 'Node 2' },
  },
  {
    id: 'c',
    position: { x: 100, y: 100 },
    data: { label: 'Node 3' },
  },
  {
    id: 'gp',
    type: "group-node",
    position: { x: -30, y: 315 },
  },
  {
    id: 'd',
    parentId: 'gp',
    extent: 'parent',
    position: { x: 20, y: 100 },
    data: { label: 'Child 1' },
  },
  {
    id: '3',
    parentId: 'gp',
    extent: 'parent',
    position: { x: 210, y: 100 },
    data: { label: 'Child 2' },
  },
];

export const nodeTypes: NodeTypes = {
  'position-logger': PositionLoggerNode,
  'group-node': GroupNode,
};
