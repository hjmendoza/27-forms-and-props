![cf](http://i.imgur.com/7v5ASc8.png) 27: Forms and Props - Haley Mendoza
===

### Features 
###### App Component
* Contains all of the **application state** 
* Contains methods for modifying the application state

###### SearchForm Component
* Contains a text input for the user to supply a Reddit sub to look up
* Contains a number input (between 1 - 100) for the user to limit the number of results to return 
  * `onSubmit` the form makes a request to Reddit at  `https://wwwreddit.com/r/${searchFormBoard}.json?limit=${searchFormLimit}`
  * Handles error if an invalid subreddit is passed in 

###### SearchResultList Component
* Inherits all search results through props
* Displays all posts from particular subreddit in unordered list

#### To Get App Started
* Clone down code
* Run `npm i`
* Run `npm run watch` which will open up a window at `localhost:8080`
* Search for a subreddit and view posts!
