import React, { useState } from "react";
import SearchFilterBar from "../components/SearchFilterBar";
import { Fruits } from "../TemplateData";
import { Card } from "@mui/material";
import "./SearchFilter.css";

export default function SearchFilter() {
  const [query, setQuery] = useState("second");
  console.log(
    Fruits.filter((fruit) => fruit.name.toLowerCase().includes("me"))
  );
  return (
    <div className="searchApp">
      {/* <SearchFilterBar /> */}
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul className="list">
        {Fruits.filter((fruit) => fruit.name.toLowerCase().includes(query)).map(
          (fruit) => (
            <li key={fruit.id} className="listItem">
              {fruit.name}
            </li>
          )
        )}
      </ul>
    </div>
  );
}
