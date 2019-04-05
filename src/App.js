import React, { Component } from 'react';
import Bank from './components/Bank/Bank';
import Farm from './components/Farm/Farm';
import Log from './components/Log/Log';
import io from 'socket.io-client';
import { connect } from 'react-redux';
import { updateUser } from './redux';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: ''
    }
    this.socket = io('http://localhost:1337/');
    this.sendResponse = this.sendResponse.bind(this);
  }

  componentDidMount = () => {
    this.socket.on('greeting', (data) => { //4
      console.log("CLIENT > socket.on greeting")
      console.log(data.msg); //5
      this.socket.emit('thankyou', {
        msg: 'client responded'
      });
      this.sendResponse({ type: 'getItem' });
    });
  }

  static getDerivedStateFromProps(nextProps, prevState, ) {
    if (nextProps !== prevState) {
      return { lastAction: nextProps.lastAction };
    }
  }

  sendResponse(event) {
    this.socket.emit(event.type, { msg: event.data });
    this.socket.on('success', (data) => {
      // this.updateResponse(data.msg);
      console.log('successful response from server')
    });

    this.socket.on('newdata', (data) => {
      // this.setState({
      //   info: data.payload,
      // });
      //this.props.addState(data.payload)
      console.log(data.payload);
    });
  }

  onChange = (event) => {
    this.setState({
      user: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.user !== '') {
      this.props.updateUser(this.state.user);
    }
  }

  render() {
    return (
      <div className="App container">
        {this.props.user !== '' ?
          <div className='container flex-cont'>
            <Bank />
            <Farm />
            <Log />
          </div>
          :
          <div className='user-form'>
            <form onSubmit={this.handleSubmit}>
              <h2 className='form-label'>Welcome!</h2>
              <input className='form-control' type='text' value={this.state.user} onChange={this.onChange} placeholder='Enter a name' />
              <button className='btn btn-primary btn2' disabled={this.state.user === ''}>Start</button>
            </form>
          </div>
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user: state.user,
  lastAction: state.lastAction,
})

const mapDispatchToProps = (dispatch) => ({
  updateUser: (value) => dispatch(updateUser(value)),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;