import React, { Component } from 'react';

import SearchBar from './search_bar';
import WeatherList from './weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
         <SearchBar />
         <WeatherList />
      </div>
    );
  }
}