import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import ImgBirdItem from './items/randomBird/imgBirdItem';


const RandomBird = ({data, currentBird, answeredBird, answeredBirdName}) => {
    return (
        <div className={'random-bird-block'}>
          <div className={'bird-img-block'}>
             <ImgBirdItem answeredBird={answeredBird} />
          </div>
          <div className={'audio-block'}>
          <div className={'bird-title'}><p>{answeredBirdName}</p></div>  
            <AudioPlayer className={'audio-player'}
                    src={data[currentBird - 1].audio}
                    showJumpControls={false}
                    autoPlayAfterSrcChange={false}
                />
          </div>
          
        </div>
    );
    
}



export default RandomBird