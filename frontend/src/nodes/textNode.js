// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';
import { Type } from 'lucide-react';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={[{ type: 'source', position: Position.Right, id: 'output' }]}
      accentColor="var(--accent-indigo)"
      Icon={Type}
    >
      <label>
        Text:
        <input 
          type="text" 
          value={currText} 
          onChange={handleTextChange} 
        />
      </label>
    </BaseNode>
  );
}
