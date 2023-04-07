import { Component } from "react";
import "./search-box.styles.css";

const SearchBox = (props) => {
  const { className, placeholder, onChangeHandler } = props;
  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

/*class SearchBox extends Component {
  render() {
    return (
      
    );
  }
}*/

export default SearchBox;
