import React, { Component } from 'react';
import './App.css';
import SearchBar from "./SearchBar";
import Category from './Category';

class HomePage extends Component {
  render() {
    return (
      <div >
        HomePage
        <SearchBar />
        <Category />
        <Category />
      </div>
    );
  }
}

export default HomePage;