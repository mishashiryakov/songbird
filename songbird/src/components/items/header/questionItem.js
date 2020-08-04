import React from 'react';

const CATEGORIES = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы'];

const QuestionItem = (props) => {
    return (
        <ul className={'categories'}>
        {CATEGORIES.map((el, index) => {
            return(
            <li className={'question'} key={index + 1}>{el}</li>
            );
        
        })}
        </ul>
    );
}

export default QuestionItem