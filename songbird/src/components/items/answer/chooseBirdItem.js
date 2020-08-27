import React from 'react';


const ChooseBird = ({data, changeClickBird}) => {
    return (
        <div className={'choose-bird'}>
            <ul className={'choose-bird-ul'}>
                {data.map(el => {
                    
                    return <li key={el.id} id={el.id} className={'bird-li'} onClick={ (e)=>changeClickBird(e.target)}><span className={'bird-btn'}></span>{el.name}</li>
                })}
            </ul>
        </div>
    );
}

export default ChooseBird