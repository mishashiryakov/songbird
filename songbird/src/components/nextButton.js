import React from 'react';

const NextButton = ({buttonActive, nextLevel}) => {
    return (
        <div className={'next-button ' + buttonActive} onClick={()=>nextLevel()}>Next level</div>
    );
}

export default NextButton