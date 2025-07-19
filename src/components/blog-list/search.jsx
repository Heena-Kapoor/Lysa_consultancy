// search.js
import SearchIcon from "@/svg/search-icon";
import React, { useState } from "react";
import axios from "axios";

const Search = ({ onResults }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        "http://blog.lysaconsultancy.com/api/blogs/search",
        {
          params: { query },
        }
      );

      if (res.data.success) {
        onResults(res.data.data); // Pass results up
      } else {
        onResults([]); // Clear on failure
      }
    } catch (error) {
      console.error("Search request failed:", error);
      onResults([]);
    }
  };

  return (
    <div className="sidebar__widget mb-40">
      <div className="sidebar__widge-title-box">
        <h3 className="sidebar__widget-title">Search</h3>
      </div>
      <div className="sidebar__widget-content">
        <div className="sidebar__search">
          <form onSubmit={handleSearch}>
            <div className="sidebar__search-input-2">
              <input
                type="text"
                placeholder="Search your keyword..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit">
                <SearchIcon />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
