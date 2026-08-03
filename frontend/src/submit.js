// submit.js

import { useState } from 'react';
import { Play } from 'lucide-react';
import { useStore } from './store';
import { shallow } from 'zustand/shallow';

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
    const { nodes, edges } = useStore(selector, shallow);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async () => {
        setIsLoading(true);
        try {
            const response = await fetch('http://localhost:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ nodes, edges })
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            alert(
                `🚀 Pipeline Execution Successful!\n\n` +
                `Nodes Detected: ${data.num_nodes}\n` +
                `Edges Detected: ${data.num_edges}\n` +
                `Is Graph a DAG?: ${data.is_dag ? 'Yes ✅' : 'No ❌ (Cycle Detected)'}`
            );
        } catch (error) {
            alert('❌ Failed to execute pipeline. Ensure the backend is running on port 8000.');
            console.error('Error submitting pipeline:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="submit-btn-container">
            <button 
                type="button" 
                className="cyber-submit-btn" 
                onClick={handleSubmit}
                disabled={isLoading}
                style={{ 
                    opacity: isLoading ? 0.7 : 1, 
                    cursor: isLoading ? 'wait' : 'pointer' 
                }}
            >
                <Play size={18} fill="currentColor" />
                {isLoading ? 'Executing...' : 'Execute Pipeline'}
            </button>
        </div>
    );
}
