import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Scroll extends Component {
  static proptypes = {
    children: PropTypes.func,
  }

  state = {
    pos: null,
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnMount () {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    const pos = window.scrollY;
    this.setState({ pos });
  }

  render () {
    return (
      <div>
      { this.props.children(this.state.pos) }
      </div>
    )
  }
}

export default Scroll;
