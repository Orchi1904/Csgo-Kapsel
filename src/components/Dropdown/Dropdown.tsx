import sortFunctions from "@/helper/sortFunctions";
import styles from "./Dropdown.module.css";

type Props = {
  name: string,
  width: string,
  dropdownValues: string[],
  setSorting: (sorting: keyof typeof sortFunctions) => void
}

function Dropdown({ name, width, dropdownValues, setSorting }: Props) {
  return (
    <div className={styles.dropdownContainer}>
      <label htmlFor={name} />

      <select className={styles.dropdown} name={name} id={name}
        style={{ width: `${width}` }} defaultValue="Sort"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => { setSorting(e.target.value as keyof typeof sortFunctions) }}
      >
        <option value="Sort" disabled hidden>Sort</option>
        {dropdownValues.map((value, index) => (
          <option key={index} value={value}>{value}</option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown