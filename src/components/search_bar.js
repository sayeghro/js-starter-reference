import React, { Component } from 'react';


class SearchBar extends Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = { searchterm: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  // Set state change
  onInputChange(event) {
    this.setState({ searchterm: event.target.value });
    this.props.onSearchChange(this.state.searchterm);
    console.log(event.target.value);
  }
  render() {
    return (
      <div>
        <input onChange={this.onInputChange} value={this.state.searchterm} />
      </div>
  );
  }
}

export default SearchBar;
