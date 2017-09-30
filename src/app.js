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

    const content = 'rse x' + pos/10;
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
          <header id="fixed-header">scroll<sub>cu</sub></header>
          : null
        }
      </div>
    )
  }

  handleClick = () => {
    //TODO: click should build a deck and show top card
    const murder = window.open(
      "",
      null, "height=532,width=510,status=no,toolbar=no,menubar=no,location=no"
    );

    murder.document.write(
      "<img src=\"/curse.jpg\"/>"
    )
  }

  render() {
    return (
      <div className="app">
        <header>scroll<sub>cu</sub></header>
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
