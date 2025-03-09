import { useState } from "react";
import { Search } from "lucide-react";
import  "../../assets/styles/SearchBar.css";

export default function ExpandingSearchBar() {
  const [query, setQuery] = useState("");

  return (
    <div className={`search-bar ${query ? "expanded" : "collapsed"}`}>
      <Search className="icon" />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="input"
      />
    </div>
  );
}
