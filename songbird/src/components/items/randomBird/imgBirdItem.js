import React from 'react';
import unknownBird from '../../../assets/img/unknown-bird.png';

const styles = {
    img: {
        height: '150px'
    }
}

const ImgBirdItem = (props) => {
    return (
        <img style={styles.img} src={unknownBird} alt={'bird'} />
    );
}

export default ImgBirdItem