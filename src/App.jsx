import { useState, useContext } from "react";
import Header from "./containers/Header/Header";
import SearchBar from "./containers/SearchBar/SearchBar";
import BooksList from "./containers/BooksList/BooksList";
import styles from "./App.module.scss";

const App = () => {

  /*searchTermfromSearchBar variable is used to store the search term entered in a search bar component.*/
  const [searchTermfromSearchBar, setSearchTermfromSearchBar] = useState("");

/*dataFromAPI variable is used to store the data received from an API. It initializes with an empty array. */
  const [dataFromAPI, setDataFromAPI] = useState([]);
  const [receivedDataForHeader, setReceivedDataForHeader] = useState(false);
  

  const handleSearch = (data) => {
    setDataFromAPI(data);
    setReceivedDataForHeader(true);
  };

  const getSearchTerm = (term) => {
    setSearchTermfromSearchBar(term);
  };

  return (
    
      <div className={styles.App}>

        <div>
          <Header toggle={receivedDataForHeader}/>
          <SearchBar onSearch={handleSearch} searchTerm={getSearchTerm} />
        </div>

        <div>
          <BooksList
            booksList={dataFromAPI}
            searchTerm={searchTermfromSearchBar} />
        </div>

      </div>
  
  );
}

export default App;
