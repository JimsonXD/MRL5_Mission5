import React from "react";

function SearchBar() {
  return (
    <div className="text-sm bg-white mx-16">
      <div className="form-control">
        <input
          type="text"
          placeholder="🔍        Type an Address, Suburb or City"
          className="input bg-white w-1/2"
        />
      </div>
    </div>
  );
}

export default SearchBar;
