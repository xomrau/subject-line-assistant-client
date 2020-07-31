import React from 'react';
import './App.css';
import Form from './components/Form';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
//import Search from './components/Search';
import slEncoder from './logic/slEncoder';
import copyClipboard from './logic/copyClipboard';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    //this.handleEmojiClick = this.handleEmojiClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      userInput: e.target.value
    });
    //console.log(`User input: ${e.target.value} ${typeof this.state.userInput}`);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState((state) => ({
      value: slEncoder(state.userInput)
    }));
  }

  render() {
    const {
      value,
      userInput
    } = this.state;
    return <div className="flex col">
      <Header />
      <Form change={this.handleChange}
        submit={this.handleClick}
        submitValue={value}
        userInput={userInput}
        copy={copyClipboard} />
      <About />
      {/*<Search filterInput={filterInput}
        searchOnChange={this.handleFilterChange} />*/}
      <Footer />
    </div>;
  }
}

