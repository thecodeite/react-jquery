import React, { Component } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      isOpen: false
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>Click the box to open it</div>
        <GiftBox isOpen={this.state.isOpen} openBox={() => this.setState({isOpen: true})}/>
      </div>
    );
  }
}

class GiftBox extends Component {
  componentDidUpdate() {
    if (this.props.isOpen) {
      $('.GiftBox-img').fadeOut(3000)
    }
  }

  render () {
    return <div className='GiftBox'>
      <img className='GiftBox-img' src='/gift_box_red.jpg' alt='box' onClick={() => this.props.openBox()}/>
    </div>
  }
}

export default App;
