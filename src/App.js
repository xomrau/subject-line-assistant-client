import React from 'react';
import { Pagination } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';
import Form from './components/Form';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
//import Search from './components/Search';
import EmojiList from './components/EmojiList';
import slEncoder from './logic/slEncoder';
import copyClipboard from './logic/copyClipboard';
import data from './assets/emojis.json';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.numberOfItemPerPage = 30;
    this.state = {
      userInput: "",
      value: "",
      isLoaded: false,
      error: null,
      items: [],
      activePage: 1
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleEmojiClick = this.handleEmojiClick.bind(this);
    this.handlePaginationChange = this.handlePaginationChange.bind(this);
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
  handleEmojiClick(e) {
    const item = e.target.innerText;
    this.setState((state) => ({
      userInput: state.userInput + item
    }));
    //console.log(`Button click input: ${e.target.innerText} ${typeof e.target.innerText}`);
  }
  handlePaginationChange(e, { activePage }) {
    this.setState({ activePage });
    //console.log(activePage);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        items: data,
        isLoaded: true,
      });
    }, 3000);
  }

  render() {
    const {
      value,
      userInput,
      isLoaded,
      items,
      error,
      activePage
    } = this.state;
    return <div className="flex col">
      <Header />
      <Form change={this.handleChange}
        submit={this.handleClick}
        submitValue={value}
        userInput={userInput}
        copy={copyClipboard} />
      <Pagination activePage={activePage}
        totalPages={Math.ceil(items.length / this.numberOfItemPerPage)}
        onPageChange={this.handlePaginationChange}
      />
      <EmojiList
        isLoaded={isLoaded}
        items={items}
        error={error}
        itemList={this.handleEmojiClick}
        activePage={activePage}
        itemPerPage={this.numberOfItemPerPage} />
      <Pagination activePage={activePage}
        totalPages={Math.ceil(items.length / this.numberOfItemPerPage)}
        onPageChange={this.handlePaginationChange}
      />
      <About />
      {/*<Search filterInput={filterInput}
        searchOnChange={this.handleFilterChange} />*/}
      <Footer />
    </div>;
  }
}

