import React, { Component } from 'react';
import Scroll from './scroll'
import './app.css';

class App extends Component {

  curse = pos => {
    const h1style = {
      color: `hsl(${pos}, 17%, 50%)`,
    };
    const hrstyle = {
      width: 10 * (pos % 215),
    };

    const content = 'rse' + ' x' + pos/10;
    return (
      <div>
        <section id="fixed-scroll">
          <h1 style={h1style}>
            { content }
          </h1>
          <hr style={hrstyle}/>
        </section>
        {
          pos > 100 ?
          <header id="fixed-header">scrollcu</header>
          : null
        }
      </div>
    )
  }

  handleClick = () => {
    //TODO: click should build a deck and show top card
    window.open(
      "",
      null, "height=400,width=400,status=yes,toolbar=no,menubar=no,location=no"
    );
  }

  render() {
    return (
      <div className="app">
        <header>scrollcu</header>
        <Scroll>
          { this.curse }
        </Scroll>
        <button
        id="more-btn"
        onClick={this.handleClick}
        >more</button>
      </div>
    );
  }
}

export default App;
