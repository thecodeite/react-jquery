import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup' // ES6
import logo from './logo.svg';
import $ from 'jquery';
import './App.css';

class App extends Component {
  constructor () {
    super()

    this.state = {
      isOpenJQuery: false,
      isOpenTG: false
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
        <fieldset>
          <legend>Using <a href='https://jquery.com/'>jQuery</a></legend>
          <GiftBoxJQuery isOpen={this.state.isOpenJQuery} openBox={() => this.setState({isOpenJQuery: true})}/>
        </fieldset>
        <fieldset>
          <legend>Using <a href='https://github.com/reactjs/react-transition-group'>react-transition-group</a></legend>
          <GiftBoxTransitionGroup isOpen={this.state.isOpenTG} openBox={() => this.setState({isOpenTG: true})}/>
        </fieldset>
      </div>
    );
  }
}

class GiftBoxTransitionGroup extends Component {
  render () {
    return <div className='GiftBox gitten'>
      <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={3000}>
        {!this.props.isOpen && <img className='GiftBox-img' src='/gift_box_red.jpg' alt='box' onClick={() => this.props.openBox()}/>}
      </CSSTransitionGroup>
    </div>
  }
}

class GiftBoxJQuery extends Component {
  componentDidUpdate() {
    if (this.props.isOpen) {
      $('.jquery-box').fadeOut(3000)
    }
  }

  render () {
    return <div className='GiftBox puppy'>
      <img className='GiftBox-img jquery-box' src='/gift_box_red.jpg' alt='box' onClick={() => this.props.openBox()}/>
    </div>
  }
}

export default App;
