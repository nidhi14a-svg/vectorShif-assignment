// draggableNode.js

import { ArrowRightSquare, BrainCircuit, LogOut, Type, Cloud, Settings2, Filter, Asterisk, Code } from 'lucide-react';

export const DraggableNode = ({ type, label }) => {
    const onDragStart = (event, nodeType) => {
      const appData = { nodeType }
      event.target.style.cursor = 'grabbing';
      event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
      event.dataTransfer.effectAllowed = 'move';
    };
  
    // Assign colors based on node type for the border hover effect
    const typeConfig = {
      customInput: { color: 'var(--accent-blue)', Icon: ArrowRightSquare },
      llm: { color: 'var(--accent-purple)', Icon: BrainCircuit },
      customOutput: { color: 'var(--accent-emerald)', Icon: LogOut },
      text: { color: 'var(--accent-indigo)', Icon: Type },
      api: { color: 'var(--accent-cyan)', Icon: Cloud },
      transform: { color: 'var(--accent-orange)', Icon: Settings2 },
      filter: { color: 'var(--accent-yellow)', Icon: Filter },
      regex: { color: 'var(--accent-pink)', Icon: Asterisk },
      parse: { color: 'var(--accent-teal)', Icon: Code }
    };
    
    const { color, Icon } = typeConfig[type] || { color: 'var(--text-main)', Icon: null };

    return (
      <div
        className={`draggable-module ${type}`}
        onDragStart={(event) => onDragStart(event, type)}
        onDragEnd={(event) => (event.target.style.cursor = 'grab')}
        style={{ borderColor: color, boxShadow: `0 0 10px ${color}20` }}
        draggable
      >
          {Icon && <Icon size={20} color={color} />}
          <span style={{ color: color, textShadow: `0 0 4px ${color}50` }}>{label}</span>
      </div>
    );
  };
  