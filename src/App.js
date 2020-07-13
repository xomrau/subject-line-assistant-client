import React from 'react';
import './App.css';
import Form from './components/Form';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import slEncoder from './logic/slEncoder';
import copyClipboard from './logic/copyClipboard';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: "",
      value: "",
      dataRetrieved: false,
      items: []
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
  fetchEmojiData() {
    fetch('')
      .then(async (response) => {
        const data = await response.json();
        this.setState = {
          dataRetrieved: true,
          items: [data[0], data[1], data[2], data[3]]
        };
      })
      .catch(() => {
        console.log("error!");
      });
  }
  componentDidMount() {
    this.fetchEmojiData();
  }
  render() {
    return <div className="flex col">
      <Header />
      <Form change={this.handleChange} 
      submit={this.handleClick} 
      submitValue={this.state.value} 
      userInput={this.state.userInput} 
      copy={copyClipboard} />
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

