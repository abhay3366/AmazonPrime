
import { useRef, useState } from "react";
import SearchMovies from "./SearchMovies";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies } from "../utils/searchSlice";

const Header = () => {
  const [homeDropdown, setHomeDropdown] = useState(false);
  const [storeDropdown, setStoreDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);


  const searchRef = useRef();
  const dispatch=useDispatch()
  const inputData=useSelector((state)=>state.input.inputData)
  console.log(inputData)

  // handle search for movies
  const handleSearchChange = () => {
    const searchInput =searchRef.current.value;
    // console.log(searchInput);
    dispatch(searchMovies(searchInput))
  };

  // search Input FUNCTION
  const searchInputfun = () => {
    setShowSearch(!showSearch);
    
  };

  //code for dropdown
  const toggleHomeDropdown = () => {
    setHomeDropdown(!homeDropdown);
  };
  const toggleStoreDropdown = () => {
    setStoreDropdown(!storeDropdown);
  };
  const toggleCategoryDropdown = () => {
    setCategoryDropdown(!categoryDropdown);
  };
  return (
    <div className="flex justify-around bg-slate-900">
     {/* <SearchMovies/> */}
      <div className="font-bold text-2xl text-white"> prime Video</div>
      <div className="flex-grow-0  w-1/3">
        <ul className="flex justify-evenly py-2">
          <li
            className=" font-medium text-xl text-white cursor-pointer"
            onMouseEnter={toggleHomeDropdown}
            onMouseLeave={toggleHomeDropdown}
          >
            Home
            {homeDropdown && (
              <ul className="absolute z-10 bg-slate-900 ">
                <li className="p-3 hover:bg-slate-300 hover:text-black">All</li>
                <li className="p-3 hover:bg-slate-300 hover:text-black">
                  Movies
                </li>
                <li className="p-3 hover:bg-slate-300 hover:text-black">
                  TV Show
                </li>
              </ul>
            )}
          </li>
          <li
            className=" font-medium text-xl text-white"
            onMouseEnter={toggleStoreDropdown}
            onMouseLeave={toggleStoreDropdown}
          >
            Store
            {storeDropdown && (
              <ul className="absolute z-10 bg-slate-900 ">
                <li className="p-3 hover:bg-slate-300 hover:text-black">All</li>
                <li className="p-3 hover:bg-slate-300 hover:text-black">
                  Rent
                </li>
                <li className="p-3 hover:bg-slate-300 hover:text-black">
                  Channels
                </li>
              </ul>
            )}
          </li>
          <li className=" font-medium text-xl text-white">Live TV</li>
          <li
            className=" font-medium text-xl text-white"
            onMouseEnter={toggleCategoryDropdown}
            onMouseLeave={toggleCategoryDropdown}
          >
            Category
            {categoryDropdown && (
              <div className="absolute bg-slate-900">
                <div>
                  <center>Genres</center>
                  <table>
                    <tr>
                      <td>Action</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td></td>
                      <td></td>
                    </tr>
                  </table>
                </div>
                <div>
                  <center>Featured Collection</center>
                </div>
              </div>
            )}
          </li>
        </ul>
      </div>
      <div className="flex gap-10">
        {/* <Input placeholder='medium size' size='md' /> */}

        {searchMovies && (
          <form onChange={handleSearchChange}>
            <input
              type="text"
              ref={searchRef}
              style={{ position: "absolute", top: "15px", right: "450px" }}
              placeholder="Find your movies"
            />
          </form>
        )}
        <img
          src="https://cdn-icons-png.flaticon.com/128/10828/10828778.png"
          alt="search img"
          className="w-10 h-10 my-2"
          onClick={searchInputfun}
          style={{ cursor: "pointer" }}
        />
        <li className="list-none py-2 font-medium text-xl text-white">
          Try For Free
        </li>
        <img
          src="https://cdn-icons-png.flaticon.com/128/727/727399.png"
          alt="user"
          className="w-12 h-12 my-2"
        />
      </div>
    </div>
  );
};

export default Header;
