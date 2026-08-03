// submit.js

import { Play } from 'lucide-react';

export const SubmitButton = () => {

    return (
        <div className="submit-btn-container">
            <button type="submit" className="cyber-submit-btn">
                <Play size={18} fill="currentColor" />
                Execute Pipeline
            </button>
        </div>
    );
}
