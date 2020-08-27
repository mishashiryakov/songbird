import React from 'react';
import logo from '../../../assets/svg/birdLogo.svg';

const styles = {
    img: {
        height: '65px'
    }
}


const LogoItem = (props) => {
    return (
        <img className={'logo'} style={styles.img} src={logo} alt={'logo'} />
    );
}

export default LogoItem