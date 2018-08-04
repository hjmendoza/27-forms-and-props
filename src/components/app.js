import React, { Component, Fragment } from 'react';


import SearchForm from './redditSearch/form.js';
import SearchResultList from './redditSearch/resultList.js';

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
    

  }

  handleSubmit(e){
    e.preventDefault();
    this.isLoading(true);
    return superagent.get(`https://www.reddit.com/r/${this.state.subreddit}.json?limit=${this.state.number}`)
    .then(result => {
      this.isLoading(false);
      return result.body;
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
        <SearchForm />
        <SearchResultList />
      </Fragment>
    );

  }
}