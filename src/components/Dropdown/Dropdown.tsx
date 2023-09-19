"use client"

import { capsuleSortFunctions, stickerSortFunctions } from "@/helper/sortFunctions";
import styles from "./Dropdown.module.css";
import { useEffect, useState } from "react";
import { setStorageItem, getStorageItem } from "@/helper/storageManager";

type Props = {
  name: string,
  dropdownValues: string[],
  defaultValue: string,
  type: "sort" | "currency",
  setSorting?: (sorting: keyof typeof capsuleSortFunctions | keyof typeof stickerSortFunctions) => void
}

function Dropdown({ name, dropdownValues, defaultValue, type, setSorting }: Props) {
  const [determinedDefaultValue, setDeterminedDefaultValue] = useState<string>("");

  /*Had to do this with this useEffect, otherwise the currency dropdown wont show the  
  saved currency on the first load. Also we have to check if window is defined, otherwise
  we will get an error saying window is not defined*/
  useEffect(() => {
    if (type === "currency") {
      const localStorageCurrency = localStorage.getItem("currency")
      setDeterminedDefaultValue(localStorageCurrency !== null ? localStorageCurrency : defaultValue);
    }else{
      setDeterminedDefaultValue(defaultValue);
    }
  }, [])

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (type === "sort") {
      setSorting ? 
      setSorting(e.target.value as keyof typeof capsuleSortFunctions | keyof typeof stickerSortFunctions)
      : "";
    } else if (type === "currency") {
      localStorage.setItem("currency", e.target.value);
    }
  }

  return (
    <div className={styles.dropdownContainer}>
      <label htmlFor={name} />

      <select className={styles.dropdown} name={name} id={name}
        defaultValue={determinedDefaultValue}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleSelect(e)} >
        <option value={determinedDefaultValue} disabled hidden>{determinedDefaultValue}</option>
        {dropdownValues.map((value, index) => (
          <option key={index} value={value}>{value}</option>
        ))}
      </select>
    </div >
  )
}

export default Dropdown