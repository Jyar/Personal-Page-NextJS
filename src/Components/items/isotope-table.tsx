import React, { ChangeEvent, useState } from "react";
import IsoTopeGrid, { GridLayout } from "react-isotope";
import Filter from "react-isotope";
import cCp from "../../../public/images/cCP.png";
import udemyReact from "../../../public/images/udemyReact.png";
import Image from "next/image";

const cardsLayout: GridLayout[] = [
  {
    id: "a",
    row: 0,
    col: 0,
    w: 5,
    h: 7,
    filter: ["aws"],
  },
  {
    id: "d",
    row: 0,
    col: 1,
    w: 5,
    h: 7,
    filter: ["udemy"],
  },
  // {
  //   id: "e",
  //   row: 1,
  //   col: 0,
  //   w: 5,
  //   h: 7,
  //   filter: ["coursera"],
  // },
];

interface FilterProps {
  label: string;
  isChecked: boolean;
}

const filtersDefault: FilterProps[] = [
  { label: "all", isChecked: true },
  { label: "aws", isChecked: false },
  { label: "udemy", isChecked: false },
  // { label: "coursera", isChecked: false },
];

export default function IsotopeTable(): JSX.Element {
  const [filters, updateFilters] = useState<FilterProps[]>(filtersDefault);

  function checkImage(f: string) {
    switch (f) {
      case "aws":
        return cCp;
      case "udemy":
        return udemyReact;
      default:
        return "";
    }
  }
  function checkUrl(f: string) {
    switch (f) {
      case "aws":
        return "https://www.credly.com/badges/1e0b5338-ba14-43de-a791-bee2cb724047/linked_in?t=rtp0kl";
      case "udemy":
        return "https://www.udemy.com/certificate/UC-19af54ea-4faa-4c0c-821b-0592c4d9c8e3/";
      default:
        return "";
    }
  }

  return (
    <div className="App">
      <FilterBox filters={filters} updateFilters={updateFilters} />

      <div className="container">
        <IsoTopeGrid
          gridLayout={cardsLayout}
          noOfCols={3}
          unitWidth={200}
          unitHeight={100}
          filters={filters}
        >
          {cardsLayout.map((card: GridLayout) => (
            <div
              data-aos="zoom-in-up"
              key={card.id}
              className={`${card.filter[0]} gallery-border`}
            >
              <div className="gallery-item">
                {/* {card.id} */}
                {card.filter.map((f, index) => (
                  <a href={checkUrl(f)}>
                    <React.Fragment key={index}>
                      <Image
                        src={checkImage(f)}
                        alt={`Picture of ${f}`}
                        width={200}
                        height={200}
                      />
                    </React.Fragment>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </IsoTopeGrid>
      </div>
    </div>
  );
}

type Filter = {
  label: string;
  isChecked: boolean;
};

type FilterBoxProps = {
  filters: Filter[];
  updateFilters: React.Dispatch<React.SetStateAction<Filter[]>>;
};

const FilterBox = ({ filters, updateFilters }: FilterBoxProps) => {
  const onFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    const { innerText } = event.target as HTMLButtonElement;
    const value = innerText;
    updateFilters((prevFilters) =>
      prevFilters.map((f) =>
        value === "all"
          ? { ...f, isChecked: true }
          : f.label === value
          ? { ...f, isChecked: true }
          : { ...f, isChecked: false }
      )
    );
  };

  return (
    <ul className="filter-box flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
      {filters.map((f) => (
        <li key={f.label} className="mr-2">
          <button
            onClick={onFilter}
            aria-current="page"
            className={`${
              f.isChecked ? "!bg-blue-400 !text-gray-200" : ""
            } filter-box-item inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500`}
          >
            {f.label}
          </button>
        </li>
      ))}
    </ul>
  );
};
