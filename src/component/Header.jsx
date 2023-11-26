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
  const dispatch = useDispatch();
  // read search data
  const inputData = useSelector((state) => state.input.inputData);
  console.log(inputData);

  // read user name
  const Nameuser=useSelector((state) => state.user.userDetails.name);
  // console.log(userData);

  // handle search for movies
  const handleSearchChange = () => {
    const searchInput = searchRef.current.value;
    // console.log(searchInput);
    dispatch(searchMovies(searchInput));
  };
  // search Input FUNCTION
  const searchInputFun = () => {
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
    <div className=" bg-slate-900">
      <div className="flex justify-around">
        {/* <SearchMovies/> */}
        <div className="font-bold text-2xl text-white"> prime Video</div>
        <div className="flex-grow-0  w-1/3">
          <ul className="flex justify-evenly py-2 border-color: red;">
            <li
              className=" font-medium text-xl text-white cursor-pointer border-color: red;"
              onMouseEnter={toggleHomeDropdown}
              onMouseLeave={toggleHomeDropdown}
            >
              Home
              {homeDropdown && (
                <ul className="absolute z-10 bg-slate-900 ">
                  <li className="p-3 hover:bg-slate-300 hover:text-black">
                    All
                  </li>
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
                  <li className="p-3 hover:bg-slate-300 hover:text-black">
                    All
                  </li>
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
        <div style={{ border: "1px solid red" }} className="flex gap-10">
          {/* <Input placeholder='medium size' size='md' /> */}
          <img
            src={
              showSearch === false
                ? "https://cdn-icons-png.flaticon.com/128/10828/10828778.png"
                : "https://cdn-icons-png.flaticon.com/128/10728/10728089.png"
            }
            alt="search img"
            className="w-10 h-10 my-2"
            onClick={searchInputFun}
            style={{ cursor: "pointer" }}
          />
          <img
            src="https://cdn-icons-png.flaticon.com/128/727/727399.png"
            alt="user"
            className="w-12 h-12 my-2"
          />
          <h1 style={{color:"white"}}>{Nameuser}</h1>
        </div>
      </div>
      <div
        style={{
          width: "50%",

          position: "absolute",
          top: "65px",
          right: "300px",
        }}
      >
        {showSearch && (
          <form onChange={handleSearchChange}>
            <input
              type="text"
              ref={searchRef}
              // style={{ position: "absolute", top: "15px", right: "300px" }}
              placeholder="Find your movies"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </form>
        )}
      </div>
    </div>
  );
};
export default Header;
