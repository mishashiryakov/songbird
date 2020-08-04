import React, { Fragment } from 'react';
import Header from './components/header';
import RandomBird from './components/randomBird';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { score: 0 };
  }



  console() {
    console.log('1')
  }

  render() {
    return (
      <Fragment>

      <Header score={ this.state.score } />
      <RandomBird />
      </Fragment>
    );
  }
}

export default App;
