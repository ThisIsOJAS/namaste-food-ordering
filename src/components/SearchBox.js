const SearchBox = () => {
  console.log(typeof Header);
  return (
    <>
      <div className="search-box">
        <input placeholder="What are you Craving ?"></input>
      </div>
      <div className="button">
        <button type="button">Go!</button>
      </div>
    </>
  );
};

export default SearchBox;
