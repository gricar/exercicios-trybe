import React, { Component } from 'react';

class ComponentePai extends Component {
  render() {
    return (
      <div>
        {props.children}
      </div>
    )
  }
}

export default ComponentePai;
