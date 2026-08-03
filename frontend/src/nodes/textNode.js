// textNode.js

import { useState, useMemo } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';
import { Type } from 'lucide-react';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  // Extract unique variables inside {{ }}
  const extractedVars = useMemo(() => {
    const regex = /\{\{([a-zA-Z_$][a-zA-Z0-9_$]*)\}\}/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(currText)) !== null) {
      matches.add(match[1]);
    }
    return Array.from(matches);
  }, [currText]);

  // Dynamically create handles
  const handles = useMemo(() => {
    const targetHandles = extractedVars.map((v, i) => ({
      type: 'target',
      position: Position.Left,
      id: v,
      style: { top: `${((i + 1) * 100) / (extractedVars.length + 1)}%` }
    }));
    return [
      ...targetHandles,
      { type: 'source', position: Position.Right, id: 'output' }
    ];
  }, [extractedVars]);

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={handles}
      accentColor="var(--accent-indigo)"
      Icon={Type}
    >
      <label style={{ width: '100%' }}>
        Text:
        <div style={{ position: 'relative', width: '100%' }}>
          {/* Hidden ghost div to drive CSS auto-resizing */}
          <div 
            style={{ 
              visibility: 'hidden', 
              whiteSpace: 'pre-wrap', 
              wordBreak: 'break-word',
              padding: '10px 12px',
              fontSize: '13px',
              fontFamily: 'inherit',
              border: '1px solid transparent',
              minHeight: '20px'
            }}
          >
            {currText || ' '}
          </div>
          <textarea 
            className="nodrag"
            value={currText} 
            onChange={handleTextChange} 
            style={{ 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
              resize: 'none', 
              overflow: 'hidden'
            }}
          />
        </div>
      </label>
    </BaseNode>
  );
}
