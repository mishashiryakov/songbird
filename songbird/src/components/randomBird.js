import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ImgBirdItem from './items/randomBird/imgBirdItem';


const RandomBird = ({data, currentBird}) => {
    return (
        <div className={'random-bird-block'}>
          <div className={'bird-img-block'}>
             <ImgBirdItem />
          </div>
          <div className={'audio-block'}>
            <div className={'bird-title'}><p>******</p></div>  
            <AudioPlayer className={'audio-player'}
                    src={data[currentBird - 1].audio}
                    onPlay={e => console.log("onPlay")}
                    showJumpControls={false}
                />
          </div>
          
        </div>
    );
    
}



export default RandomBird