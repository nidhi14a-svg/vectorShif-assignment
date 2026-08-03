import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './baseNode';
import { Cloud, Settings2, Filter, Asterisk, Code } from 'lucide-react';

export const ApiNode = ({ id, data }) => {
  const [endpoint, setEndpoint] = useState(data?.endpoint || 'https://api.example.com');

  return (
    <BaseNode
      id={id}
      title="API Fetch"
      handles={[
        { type: 'target', position: Position.Left, id: 'request' },
        { type: 'source', position: Position.Right, id: 'response' }
      ]}
      accentColor="var(--accent-cyan)"
      Icon={Cloud}
    >
      <label>
        Endpoint:
        <input 
          type="text" 
          value={endpoint} 
          onChange={(e) => setEndpoint(e.target.value)} 
        />
      </label>
    </BaseNode>
  );
};

export const TransformNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="Transform"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'output' }
      ]}
      accentColor="var(--accent-orange)"
      Icon={Settings2}
    >
      <span>Transforms data.</span>
    </BaseNode>
  );
};

export const FilterNode = ({ id, data }) => {
  const [criteria, setCriteria] = useState(data?.criteria || '');

  return (
    <BaseNode
      id={id}
      title="Filter"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'output' }
      ]}
      accentColor="var(--accent-yellow)"
      Icon={Filter}
    >
      <label>
        Criteria:
        <input 
          type="text" 
          value={criteria} 
          onChange={(e) => setCriteria(e.target.value)} 
        />
      </label>
    </BaseNode>
  );
};

export const RegexNode = ({ id, data }) => {
  const [pattern, setPattern] = useState(data?.pattern || '.*');

  return (
    <BaseNode
      id={id}
      title="Regex Match"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'output' }
      ]}
      accentColor="var(--accent-pink)"
      Icon={Asterisk}
    >
      <label>
        Pattern:
        <input 
          type="text" 
          value={pattern} 
          onChange={(e) => setPattern(e.target.value)} 
        />
      </label>
    </BaseNode>
  );
};

export const ParseNode = ({ id, data }) => {
  const [format, setFormat] = useState(data?.format || 'JSON');

  return (
    <BaseNode
      id={id}
      title="Parse Data"
      handles={[
        { type: 'target', position: Position.Left, id: 'input' },
        { type: 'source', position: Position.Right, id: 'output' }
      ]}
      accentColor="var(--accent-teal)"
      Icon={Code}
    >
      <label>
        Format:
        <select value={format} onChange={(e) => setFormat(e.target.value)}>
          <option value="JSON">JSON</option>
          <option value="XML">XML</option>
          <option value="CSV">CSV</option>
        </select>
      </label>
    </BaseNode>
  );
};
