import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { TfiSearch } from "react-icons/tfi";

const SearchForm = ({ onSearch }: any) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    onSearch(query);
  };
  return (
    <div className="pb-10 pt-4 w-full flex items-center justify-between space-x-6">
      <form
        className="flex lg:w-6/12 mr-auto items-center justify-center w-full"
        onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border border-gray-500 px-6 py-3 dark:bg-primary rounded-l-full focus:outline-none focus:border-blue-500"
          placeholder="Search For Games and Forecasters here..."
        />
        <button
          type="submit"
          className="dark:bg-gray-800 border border-gray-500 dark:text-gray-300 text-primary px-6 py-3 rounded-r-full focus:outline-none">
          <TfiSearch className="text-2xl" />
        </button>
      </form>
      <div className="tags flex items-center space-x-6">
        <p className="dark:text-gray-100 text-primary font-bold">Levels:</p>
        <button className="dark:bg-gray-600 border border-primary shadow-md text-primary py-2 px-4 text-sm rounded-lg dark:text-gray-100 font-semibold ">
          VIP
        </button>
        <button className="dark:bg-gray-600 border border-primary shadow-md text-primary py-2 px-4 text-sm rounded-lg dark:text-gray-100 font-semibold">
          Premuimn
        </button>
        <button className="dark:bg-gray-600 border border-primary shadow-md text-primary py-2 px-4 text-sm rounded-lg dark:text-gray-100 font-semibold">
          Bronze
        </button>
        <button className="dark:bg-gray-600 border border-primary shadow-md text-primary py-2 px-4 text-sm rounded-lg dark:text-gray-100 font-semibold">
          All
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
