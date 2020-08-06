import React, { Fragment } from 'react';
import Header from './components/header';
import RandomBird from './components/randomBird';
import Answer from './components/answer';
import birdsData from './components/birdsData';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      score: 0,
      round: 0,
      currentBird: 1,
      clickBird: 1,
      beforeStart: true,
      afterStart: false
    };
  }

  componentDidMount() {
    this.setCurrentBird();
  }

  setCurrentBird() {
    this.setState({currentBird: this.randomInteger(1, 6)})
  }

  randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  changeClickBird(newClickBird) {
    if(newClickBird === this.state.currentBird) {console.log('true')}
    console.log(newClickBird)
    this.setState({
      clickBird: newClickBird,
      beforeStart: false,
      afterStart: true
    })
    
  }

  render() {
    return (
      <Fragment>

      <Header score={ this.state.score } />
      <RandomBird data={birdsData[this.state.round]} currentBird={this.state.currentBird}/>
      <Answer data={birdsData[this.state.round]} currentBird={this.state.currentBird} clickBird={this.state.clickBird} changeClickBird={this.changeClickBird.bind(this)} beforeStart={this.state.beforeStart} afterStart={this.state.afterStart}/>
      </Fragment>
    );
  }
}

export default App;
