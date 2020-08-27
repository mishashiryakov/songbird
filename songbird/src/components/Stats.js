import React from 'react';
import win from '../assets/img/win.jpg';

const Stats = ({showStats, tryAgain, score}) => {
    return (
        <div  style={{display: showStats}} className={'stats-block'}>
            <div className={'info-block'}>
                <span className={'congrats'}>Поздравляем!</span>
    <span className={'result'}>Вы прошли викторину и набрали <span className={'result-num'}>{score}</span> из <span className={'result-num'}>30</span> возможных баллов</span>
            </div>
            {score < 30 && <div className={'start-new-game'} onClick={()=>tryAgain()}>
                Попробовать еще раз!
            </div>}
            {score === 30 && <img className={'win-img'} src={win} alt={'win'}/>}
        </div>
    );
}

export default Stats