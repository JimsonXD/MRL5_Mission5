import React from "react";

function SearchBar() {
  return (
    <div className="text-sm bg-white">
      <div className="form-control mx-12">
        <input
          type="text"
          placeholder="🔍        Type an Address, Suburb or City"
          className="input input-bordered bg-white border-2 border-gray-400"
        />
      </div>
    </div>
  );
}

export default SearchBar;
