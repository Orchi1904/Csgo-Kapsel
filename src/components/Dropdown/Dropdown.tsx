"use client"

import { capsuleSortFunctions, stickerSortFunctions } from "@/helper/sortFunctions";
import styles from "./Dropdown.module.css";

type Props = {
  name: string,
  dropdownValues: string[],
  defaultValue: string,
  setSorting?: (sorting: keyof typeof capsuleSortFunctions | keyof typeof stickerSortFunctions) => void
}

function Dropdown({ name, dropdownValues, defaultValue, setSorting }: Props) {
  return (
    <div className={styles.dropdownContainer}>
      <label htmlFor={name} />

      <select className={styles.dropdown} name={name} id={name}
              defaultValue={defaultValue}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => 
          { setSorting ? setSorting(e.target.value as keyof typeof capsuleSortFunctions | keyof typeof stickerSortFunctions)
                       : ""}}
      >
        <option value={defaultValue} disabled hidden>{defaultValue}</option>
        {dropdownValues.map((value, index) => (
          <option key={index} value={value}>{value}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown