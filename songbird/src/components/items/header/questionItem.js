import React from 'react';

const CATEGORIES = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

const QuestionItem = ({round}) => {
    return (
        <ul className={'categories'}>
        {CATEGORIES.map((el, index) => {
            if(round === index){ index = 'active' }
            return(
                <li className={'question'} id={'question-' + index} key={index + 1}>{el}</li>
            );
        
        })}
        
        </ul>
    );
}

export default QuestionItem