import React from "react";
import { useEffect, useState } from "react";
import { fetchBooksFromApi } from "../../Data-Utils/fetchBooksFromApi";
import { handleUndefined } from "../../Data-Utils/handleUndefined";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Loading from "../../components/Loading/Loading";
import styles from "./SearchBar.module.scss";
import ErrorPage from "../../components/ErrorPage/ErrorPage.jsx";

const SearchBar = ({ onSearch, searchTerm }) => {
 
  /**inputValue stores the current value entered in the search input field. */
  const [inputValue, setInputValue] = useState("");
  
  //initialSearchTerm stores the initial search term that triggers the API call.
  const [initialSearchTerm, setSearchTerm] = useState("");
  
  const [initialAPI, APIAfterSearch] = useState([]);
  
  const [loading, setLoading] = useState(false);
  
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    if (initialSearchTerm) {
      setLoading(true);
      setError(false);
      fetchBooksFromApi(initialSearchTerm) 
        .then((data) => {
          const cleanedData = handleUndefined(data.items);
          APIAfterSearch(cleanedData);
          onSearch(cleanedData);
          searchTerm(initialSearchTerm);
        })
        .catch(() => {
          setError(true);
          onSearch("");
        })
        .finally(() => setLoading(false));
    }
  }, [initialSearchTerm]);

  return (
    <div className={styles.container__searchBar}>
      <div>
        <input
          className={styles.container__searchBar__inputfield}
          value={inputValue}
          onChange={handleChange}
          type="text"
          id="input__text"
          required
        />
        <button
          className={styles.button__searchBar__submit}
          onClick={handleSubmit}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          
          
        </button>
        {loading && <Loading />}
        {error && <ErrorPage searchTerm = {initialSearchTerm}/>}
      </div>
    </div>
  );
};

export default SearchBar;
