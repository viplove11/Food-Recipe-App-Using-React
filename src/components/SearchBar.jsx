import styles from "./SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onClickHandle, onInputChange, searchedItem }) => {
  return (
    <>
      <div className="input-group mb-3" id="searchBar">
        <input
          type="text"
          value={searchedItem}
          className={`${styles.searchBarInput} form-control`}
          placeholder="Search Reciepe"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={onInputChange}
        />
        <button
          className={`${styles.searchButton} btn btn-warning`}
          type="button"
          id="button-addon2"
          onClick={onClickHandle}
        >
          <FaSearch />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
