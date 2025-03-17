const SearchBar = ({ setSearchTerm, searchTerm, handleButtonSearched }) => {
  return (
    <div className="flex flex-wrap gap-3">
      <input
        className="bg-white text-black text-3 max-w-[500px] flex-[3_1_0%] border-2 p-2 rounded-md border-[rgb(169,150,148)]"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button
        className="text-white bg-[rgb(113,78,74)] text-l cursor-pointer transition-[0.3sease-in-out] p-4 rounded-2 border-[none]"
        onClick={() => handleButtonSearched()}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
