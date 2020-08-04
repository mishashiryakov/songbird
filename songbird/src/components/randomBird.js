import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../assets/audio/ptfb.mp3';
import ImgBirdItem from './items/randomBird/imgBirdItem';


const RandomBird = (props) => {
    return (
        <div className={'random-bird-block'}>
          <ImgBirdItem />
          <div className={'audio-block'}>
            <div className={'bird-title'}>123123</div>  
            <AudioPlayer className={'audio-player'}
                    src={song}
                    onPlay={e => console.log("onPlay")}
                    showJumpControls={false}
                    
                    // other props here
                />
          </div>
          
        </div>
    );
    
}



export default RandomBird