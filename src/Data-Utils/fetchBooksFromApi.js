
export const fetchBooksFromApi = async (initialSearchTerm) => {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${initialSearchTerm}&maxResults=20&key=AIzaSyDgG4PnRb0oYYzILqALxR5_q5_r-1Qurg0`,
      {
        headers: { Accept: "application/json" },
      }
    );
    const dataFromAPI = await response.json();
    return dataFromAPI;
};

export default fetchBooksFromApi;
