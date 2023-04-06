import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
