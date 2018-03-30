import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render() {
        return (
            <form className='input-group' onSubmit={this.onFormSubmit.bind(this)}>
                <input
                    placeholder='Type any city to get a weather forecast'
                    className='form-control'
                    value={this.state.term}
                    onChange={this.onInputChange.bind(this)} />
                <span className='input-group-btn'>
                    <button className='btn btn-secondary' type='submit'>Go</button>
                </span>
            </form>
        );
    }
}

export default connect(null, actions)(SearchBar);