import React, { Component } from 'react';
import './App.css';
import * as api from './utils/api.js'

class App extends Component {

  componentDidMount() {
    api.getArticles()
    .then(data => {
      console.log(data)
    })
  }
  render() {
    return (
      <div className="App">
        <p>Form to search for articles will go here.. </p> 
        <ul> 
            <li>Response from..</li>
            <li>search will go here.</li>
        </ul>
      </div>
    );
  }
}

export default App;