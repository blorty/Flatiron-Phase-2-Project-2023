import React from "react";

function Search({ movies, onSearch }) {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchCategory, setSearchCategory] = useState("type");
  
    const handleSearchTermChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSearchCategoryChange = (event) => {
      setSearchCategory(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      onSearch(searchTerm, searchCategory);
    };
  
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search by:
          <select value={searchCategory} onChange={handleSearchCategoryChange}>
            <option value="type">Type</option>
            <option value="title">Title</option>
            <option value="director">Director</option>
            <option value="year">Year</option>
          </select>
        </label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
    );
    
export default Search;
