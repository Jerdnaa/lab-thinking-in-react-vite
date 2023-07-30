const SearchBar = ({ search, setSearch, checked, setChecked }) => {
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };
  const handleCheck = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <>
      <label>
        <input type="text" value={search} onChange={handleSearch} />
      </label>
      <label>
        Show only products in stock:
        <input type="checkbox" checked={checked} onChange={handleCheck} />
      </label>
    </>
  );
};

export default SearchBar;
