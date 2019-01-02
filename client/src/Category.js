import React, { Component } from 'react';
import './App.css';
import ResourceCard from "./ResourceCard";

class Category extends Component {
  render() {
    return (
      <div >
        Category
        <ResourceCard />
        <ResourceCard />
      </div>
    );
  }
}

export default Category;