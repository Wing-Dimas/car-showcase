"use client";

import { useState } from "react";
import { SearchManufacture } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses?: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src={"/magnifying-glass.svg"}
        alt="magnifying-glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchModel === "" && searchManufacturer === "") {
      return alert("Please fill in the search bar");
    }

    setModel(searchModel.toLowerCase());
    setManufacturer(searchManufacturer.toLowerCase());
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacture
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          alt="model-icon"
          width={25}
          height={25}
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
