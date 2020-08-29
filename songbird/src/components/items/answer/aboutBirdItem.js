import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const styles = {
    img: {        
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }
}

const AboutBird = ({data, clickBird, beforeStart, afterStart}) => {
    return (
        <div className={'about-bird'}>
            {beforeStart && <p className={'instruction'}>
                <span>Послушайте аудио.</span>
                <span>Выберите птицу из списка.</span>
            </p>}
            {afterStart &&  <div className={'bird-card'}>
                <div className={'current-bird-img'} style={{...styles.img, backgroundImage:`url(${data[clickBird - 1].image})`}}/>
                <div className={'bird-info'}>
                    <span>{data[clickBird - 1].name}</span>
                    <span className={'bird-species'}>{data[clickBird - 1].species}</span>
                    {afterStart && <AudioPlayer className={'audio-player-small'}
                    
                    src={data[clickBird - 1].audio}
                    autoPlay={false}
                    showJumpControls={false}
                    autoPlayAfterSrcChange={false}
                />}
                </div>
            </div>}
            {afterStart && <div className={'bird-description'}>
                <p>{data[clickBird - 1].description}</p>
            </div>}
        </div>
        
    );
}

export default AboutBird