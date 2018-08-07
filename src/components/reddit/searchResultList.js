import React, { Component } from 'react';

class SearchResultList extends Component {

  render() {
    return (
      <ul>
        {
          this.props.results.map((results, i) => {
            return (
              <li key={i}>
                <a href={'https://reddit.com' + results.data.permalink}><h3>{results.data.title}</h3></a>
                <img src={results.data.thumbnail} />
                <p>Upvotes: {results.data.ups}</p>
              </li>
            );
          })
        }
      </ul>
    );
  }
}

export default SearchResultList;