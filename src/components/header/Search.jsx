import { useState } from "react";
import SearchIcon from "../../assets/icons/search.svg";

const Search = () => {
  const [isInputVisible, setInputVisible] = useState(false);

  const toggleInputVisible = () => {
    setInputVisible(!isInputVisible);
  };

  return (
    <div>
      <form action="#">
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all focus-within:border-b-0 focus-within:rounded-md">
          {isInputVisible ? (
            <input
              className="bg-transparent placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none transition-all duration-300"
              type="search"
              placeholder="Search Location"
              required=""
            />
          ) : (
            <button onClick={toggleInputVisible} type="button">
              <img
                className="border rounded-full p-2 border-white/50 transition-all duration-300 hover:bg-black/30 cursor-pointer transition-all"
                src={SearchIcon}
                alt="Search Icon"
              />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Search;
