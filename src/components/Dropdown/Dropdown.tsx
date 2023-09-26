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
  const [determinedDefaultValue, setDeterminedDefaultValue] = useState<string>("");
  const { currency, setCurrency, capsuleSorting, setCapsuleSorting } = useGlobalContext();

  /*Had to do this with this useEffect, otherwise the currency dropdown wont show the  
  saved currency on the first load. Also we have to check if window is defined, otherwise
  we will get an error saying window is not defined*/
  useEffect(() => {
    if (type === "currency") {
      setDeterminedDefaultValue(currency);
    } else if (type === "capsuleSort") {
      setDeterminedDefaultValue(capsuleSorting);
    } else {
      setDeterminedDefaultValue(defaultValue);
    }
  }, [])

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (type === "stickerSort") {
      setSorting ?
        setSorting(e.target.value as keyof typeof capsuleSortFunctions | keyof typeof stickerSortFunctions)
        : "";
    } else if (type === "capsuleSort") {
      setSorting ?
        setSorting(e.target.value as keyof typeof capsuleSortFunctions | keyof typeof stickerSortFunctions)
        : "";
      setCapsuleSorting(e.target.value as keyof typeof capsuleSortFunctions);
    } else if (type === "currency") {
      setCurrency(e.target.value as Currencies);
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