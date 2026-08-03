// baseNode.js

import { Handle } from 'reactflow';

export const BaseNode = ({ id, title, handles = [], children, accentColor = '#00f0ff', Icon }) => {
  return (
    <div className="cyber-node" style={{ borderColor: accentColor, boxShadow: `0 0 15px ${accentColor}40` }}>
      {handles.map((handle, index) => (
        <Handle
          key={`${id}-${handle.id}-${index}`}
          className="cyber-handle"
          type={handle.type}
          position={handle.position}
          id={`${id}-${handle.id}`}
          style={{ ...handle.style, color: accentColor, borderColor: accentColor }}
        />
      ))}
      <div className="cyber-node-header" style={{ borderBottomColor: `${accentColor}40` }}>
        {Icon && <Icon size={16} color={accentColor} />}
        <span style={{ color: '#fff' }}>{title}</span>
      </div>
      <div className="cyber-node-body">
        {children}
      </div>
    </div>
  );
};
