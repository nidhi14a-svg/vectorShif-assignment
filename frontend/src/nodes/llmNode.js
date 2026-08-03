// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './baseNode';
import { BrainCircuit } from 'lucide-react';

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      handles={[
        { type: 'target', position: Position.Left, id: 'system', style: { top: `${100/3}%` } },
        { type: 'target', position: Position.Left, id: 'prompt', style: { top: `${200/3}%` } },
        { type: 'source', position: Position.Right, id: 'response' }
      ]}
      accentColor="var(--accent-purple)"
      Icon={BrainCircuit}
    >
      <span>This is a LLM.</span>
    </BaseNode>
  );
}
