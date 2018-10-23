import MainPage from './components/pages/MainPage.js'
import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import SearchPage from './components/pages/SearchPage.js'
import './App.css'

class BooksApp extends Component {

  render() {

    return(
      <div>
        <Route exact path="/" component= {MainPage}/>
        <Route exact path="/search" component= {SearchPage}/>
      </div>
      );
 }
}
export default BooksApp
