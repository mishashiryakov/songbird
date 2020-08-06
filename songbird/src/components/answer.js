import React from 'react';
import ChooseBird from './items/answer/chooseBirdItem';
import AboutBird from './items/answer/aboutBirdItem';

const Answer = ({ data, currentBird, clickBird, changeClickBird, beforeStart, afterStart}) => {
    // console.log(data)
    return (
        
        <>
        <div className={'answer-block'}>
            <ChooseBird data={data} changeClickBird={changeClickBird}/>
            <AboutBird data={data} clickBird={clickBird} beforeStart={beforeStart} afterStart={afterStart}/>
        </div>
        </>
    );
}

export default Answer