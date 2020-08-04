import React from 'react';

const ScoreItem = ({ score }) => {
    return (
    <div className='score'>
        <p>
        Score:&nbsp;
        {score}
        </p>
        
    </div>
    );
}

export default ScoreItem;