"use client"

import { capsuleSortFunctions, stickerSortFunctions } from "@/helper/sortFunctions";
import styles from "./Dropdown.module.css";
import { useEffect, useState } from "react";
import { useGlobalContext } from "@/app/context/store";
import { Currencies } from "@/types";

type Props = {
  name: string,
  dropdownValues: string[],
  defaultValue: string,
  type: "sort" | "currency",
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
    } else {
      setDeterminedDefaultValue(capsuleSorting);
    }
  }, [])

  useEffect(() => {
    console.log(capsuleSorting);
  }, [capsuleSorting]);

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (type === "sort") {
      setSorting ?
        setSorting(e.target.value as keyof typeof capsuleSortFunctions | keyof typeof stickerSortFunctions)
        : "";
      e.target.value in capsuleSortFunctions ? setCapsuleSorting(e.target.value as keyof typeof capsuleSortFunctions) : "";
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