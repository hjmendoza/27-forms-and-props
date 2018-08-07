import React, { Component } from 'react';

class SearchForm extends Component {

  render() {
    return (
      <form className={this.props.error ? 'error' : '' } onSubmit={this.props.handleSubmit}>
        <label>
          Subreddit Name <br />
          <input onChange={this.props.handleChange} type="text" name="subreddit"/>
        </label>
        <br />
        <br />
        <label>
          Results Limit (1 - 100) <br />
          <input onChange={this.props.handleChange} type="number" min="1" max="100" name="number"/>
        </label>
        <br />
        <br />
        <input type="submit"/>
      </form>
    );
  }
}

export default SearchForm;