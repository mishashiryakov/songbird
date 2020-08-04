import React from 'react';
import LogoItem from './items/header/logoItem';
import ScoreItem from './items/header/scoreItem';
import QuestionItem from './items/header/questionItem';



const Header = ({ score }) => {
    return (
        <header>
            <div className={'logoScore'}>
                <LogoItem />
                <ScoreItem score={score} />
            </div>
            <div className={'question-list'}>
                <QuestionItem />
            </div>
        </header>
    );
}

export default Header