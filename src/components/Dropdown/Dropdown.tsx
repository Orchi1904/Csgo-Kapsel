"use client"

import { capsuleSortFunctions, stickerSortFunctions } from "@/helper/sortFunctions";
import styles from "./Dropdown.module.css";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/Context/store";
import { Currencies } from "@/types";

type Props = {
  name: string,
  dropdownValues: string[],
  defaultValue: string,
  type: "capsuleSort" | "stickerSort" | "currency",
  setSorting?: (sorting: keyof typeof capsuleSortFunctions | keyof typeof stickerSortFunctions) => void
}

function Dropdown({ name, dropdownValues, defaultValue, type, setSorting }: Props) {
  const [determinedDefaultValue, setDeterminedDefaultValue] = useState<string>(defaultValue);
  const { currency, setCurrency, capsuleSorting } = useGlobalContext();

  /*Had to do this with this useEffect, otherwise the currency dropdown wont show the  
  saved currency on the first load. */
  useEffect(() => {
    if (type === "currency") {
      setDeterminedDefaultValue(currency);
    } else if (type === "capsuleSort") {
      setDeterminedDefaultValue(capsuleSorting);
    }
  }, [])

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    if (type === "stickerSort" || type === "capsuleSort") {
      setSorting ?
        setSorting(selectedValue as keyof typeof capsuleSortFunctions | keyof typeof stickerSortFunctions)
        : "";
    } else {
      setCurrency(selectedValue as Currencies);
    }

    setDeterminedDefaultValue(selectedValue);
  }

  return (
    <div className={styles.dropdownContainer}>
      <label htmlFor={name} />

      <select className={styles.dropdown} name={name} id={name}
        value={determinedDefaultValue}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSelect(e)} >
        <option value={defaultValue} disabled hidden>{defaultValue}</option>
        {dropdownValues.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div >
  )
}

export default Dropdown