import React from "react";

function SearchBar() {
  return (
    <div className="text-sm bg-white sm:mx-16">
      <div className="form-control">
        <input
          type="text"
          placeholder="🔍 Type an Address, Suburb or City"
          className="input bg-white w-full"
        />
      </div>
    </div>
  );
}

export default SearchBar;
