import React, { Component, Fragment } from 'react';


import SearchForm from './reddit/searchForm.js';
import SearchResultList from './reddit/searchResultList.js';

import './styles/app.scss';

import superagent from 'superagent';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subreddit: '',
      number: '',
      results: [],
      loading: false,
      error: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.isLoading = this.isLoading.bind(this);
  }

  isLoading(loading) {
    this.setState( Object.assign(...this.state, {loading}) );
  }

  handleChange(e){
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  }

  async handleSubmit(e){
    e.preventDefault();
    this.isLoading(true);
    await superagent.get(`https://www.reddit.com/r/${this.state.subreddit}.json?limit=${this.state.number}`)
    .then(results => {
      this.setState({
        error: false,
        results: results.body.data.children,
      });
      this.isLoading(false);
    })
    .catch(err =>  {
      console.log(err);
      this.isLoading(false);
      this.setState({ error: true });
    })
  }

  render() {
    return (
      <Fragment>
        <h1>Subreddit Search</h1>
        <SearchForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} error={this.state.error} />
        <SearchResultList results={this.state.results} />
      </Fragment>
    );

  }
}