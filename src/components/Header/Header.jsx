import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import FindBook from "../../assets/images/finding-book.png";

const Header = ({ setSearchTerm, searchTerm, handleButtonSearched }) => {
  return (
    <div className="bg-[rgb(251,245,243)]">
      <div className="flex flex-wrap gap-3 justify-between">
        <div className="mx-20 pt-20 w-1/3">
          <h2 className="text-4xl">Let's scout our shelfs</h2>
          <p className="py-7">
            Looking for a book? Whether you are searching for a bestseller, a
            hidden gem, or a classic novel, our powerful search tool makes it
            easy to discover your next great read. Start exploring today and
            dive into a world of stories!
          </p>
          <SearchBar
            setSearchTerm={setSearchTerm}
            searchTerm={searchTerm}
            handleButtonSearched={handleButtonSearched}
          />
        </div>
        <div className="w-2/4">
          <img src={FindBook} alt="findBook" />
        </div>
      </div>
    </div>
  );
};

export default Header;
