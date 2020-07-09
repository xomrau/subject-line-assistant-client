import React from 'react';
import './App.css';
import Form from './components/Form';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import slEncoder from './logic/slEncoder';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: "",
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((state) => ({
      value: slEncoder(state.userInput)
    }));
  }
  render() {
    return <div className="">
      <Header />
      <Form change={this.handleChange} 
      submit={this.handleClick} 
      submitValue={this.state.value} 
      userInput={this.state.userInput} />
      <About />
      <Footer />
    </div>;
  }
}

/*
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/

