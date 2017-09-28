import React, { Component } from 'react';
import Scroll from './scroll'
import './app.css';

class App extends Component {

  scrollCorn = pos => {
    const h1style = {
      color: `hsl(${pos}, 25%, 50%)`,
    };
    const hrstyle = {
      width: pos,
    };
    
    const content = 'corn' + ' x' + pos/10;
    return (
      <section className="fixed">
        <h1 style={h1style}>
          { content }
        </h1>
        <hr style={hrstyle}/>
      </section>
    )
  }

  render() {
    return (
      <div className="app">
        <header>scrollcurse</header>
        <Scroll>
          { this.scrollCorn }
        </Scroll>
      </div>
    );
  }
}

export default App;
