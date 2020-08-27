import React, { Fragment } from 'react';
import Header from './components/header';
import RandomBird from './components/randomBird';
import Answer from './components/answer';
import NextButton from './components/nextButton';
import birdsData from './components/birdsData';
import wrong from './assets/audio/mistake.mp3';
import correct from './assets/audio/correct.mp3';
import unknownBird from './assets/img/unknown-bird.png';
import Stats from './components/Stats';

const audioWrong = new Audio(wrong)
const audioCorrect = new Audio(correct)

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      score: 0,
      answerTries: 0,
      round: 0,
      currentBird: 1,
      clickBird: 1,
      beforeStart: true,
      afterStart: false,
      playMode: true,
      buttonActive: null,
      answeredBird: unknownBird,
      answeredBirdName: '******',
      showStats: 'none',
      showGame: 'block'
    };
  }

  componentDidMount() {
    this.setCurrentBird();
  }

  setCurrentBird() {
    this.setState({currentBird: this.randomInteger(1, 6)})
  }

  randomInteger(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }
  
  changeClickBird(newClickBird) {
    if(+newClickBird.id === this.state.currentBird && this.state.playMode) {
      newClickBird.firstChild.classList.add('green')
      setTimeout(() => {document.querySelector('.audio-player').firstChild.pause()}, 100)
      audioCorrect.play()
      this.setState({
        playMode: false,
        buttonActive: 'green-btn',
        answeredBird: birdsData[this.state.round][this.state.currentBird - 1].image,
        answeredBirdName:birdsData[this.state.round][this.state.currentBird - 1].name,
        score: this.state.score + (5- this.state.answerTries)

      });
    } else  if(this.state.playMode) {
      this.setState({
        answerTries: this.state.answerTries + 1
      })
      newClickBird.firstChild.classList.add('red')
      audioWrong.play()
    }
    
    this.setState({
      clickBird: newClickBird.id,
      beforeStart: false,
      afterStart: true,
    })

    if(document.querySelector('.audio-player-small')) {
      // setTimeout(() => {document.querySelector('.audio-player-small').firstChild.pause()}, 100)
      
    }
  }

  startNextLevel() {
    if(this.state.round === 5) {
      // setTimeout(() => {document.querySelector('.audio-player').firstChild.pause()}, 100)
      this.showStats()
      

    }

    if(!this.state.playMode && this.state.round !== 5) {
      document.querySelectorAll('.bird-btn').forEach((el)=>{
        el.classList.remove('red')
        el.classList.remove('green')
      })

      this.setState({
        answerTries: 0,
        round: this.state.round + 1,
        currentBird: this.randomInteger(1, 6),
        clickBird: 1,
        beforeStart: true,
        afterStart: false,
        playMode: true,
        buttonActive: null,
        answeredBird: unknownBird,
        answeredBirdName: '******'
      })
    }
    // setTimeout(() => {document.querySelector('.audio-player').firstChild.pause()}, 110)
     
    

  }

  showStats() {
    document.querySelectorAll('.bird-btn').forEach((el)=>{
      el.classList.remove('red')
      el.classList.remove('green')
    })
    this.setState({
      showStats: 'flex',
      showGame: 'none',
    })
  }

  tryAgain() {
    this.setState({
      currentBird: this.randomInteger(1, 6),
      score: 0,
      answerTries: 0,
      round: 0,
      clickBird: 1,
      beforeStart: true,
      afterStart: false,
      playMode: true,
      buttonActive: null,
      answeredBird: unknownBird,
      answeredBirdName: '******',
      showStats: 'none',
      showGame: 'block'
    })
    // setTimeout(() => {document.querySelector('.audio-player').firstChild.pause()}, 110)
  }

  render() {
    const {score, round, currentBird, clickBird, beforeStart, afterStart, buttonActive, answeredBird, answeredBirdName, showStats, showGame} = this.state;
    return (
      <Fragment>
      <Header score={score} round={round} />
      <div style={{display: showGame}}>
      <RandomBird data={birdsData[round]} currentBird={currentBird} answeredBird={answeredBird} answeredBirdName={answeredBirdName} />
      <Answer data={birdsData[round]} currentBird={currentBird} clickBird={clickBird} changeClickBird={this.changeClickBird.bind(this)} beforeStart={beforeStart} afterStart={afterStart} />
      <NextButton buttonActive={buttonActive} nextLevel={this.startNextLevel.bind(this)} />
      </div>
      <Stats showStats={showStats} tryAgain={this.tryAgain.bind(this)} score={score}/>
      </Fragment>
    );
  }
}

export default App;
