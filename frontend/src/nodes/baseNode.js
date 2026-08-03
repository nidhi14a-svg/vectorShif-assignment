// baseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, title, handles = [], children }) => {
  return (
    <div style={{width: 200, height: 80, border: '1px solid black'}}>
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-${handle.id}-${index}`}
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={handle.style || {}}
        />
      ))}
      <div>
        <span>{title}</span>
      </div>
      <div>
        {children}
      </div>
    </div>
  );
};
