import useLocationSearch from "../hooks/useLocationSearch";

const SearchBox = ({ verticalLayout }) => {
  const {
    searchTerm,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    handleSearch,
    handleSuggestionClick,
    handleSubmit,
  } = useLocationSearch();

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={
          verticalLayout
            ? "d-flex flex-column align-items-center mt-2"
            : "d-flex"
        }
      >
        <div className="position-relative">
          <input
            className="form-control me-2"
            type="search"
            id="validationDefault03"
            required
            placeholder="Location name..."
            aria-label="Location name..."
            value={searchTerm}
            onChange={handleSearch}
            onFocus={() => setShowSuggestions(true)}
          />
          {showSuggestions && suggestions.length > 0 && (
            <div
              className="dropdown-menu show position-absolute w-100"
              style={{ zIndex: "1000", top: "calc(100% + 5px)", left: "0" }}
            >
              {suggestions.map((item, index) => (
                <button
                  key={index}
                  className="dropdown-item"
                  type="button"
                  onClick={() => handleSuggestionClick(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
        <button
          className={
            verticalLayout ? "btn btn-primary mt-2" : "btn btn-primary"
          }
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
