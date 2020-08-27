import React from 'react';


const ImgBirdItem = ({answeredBird}) => {
    return (
        <img className={'answered-bird-img'} src={answeredBird} alt={'bird'} />
    );
}

export default ImgBirdItem