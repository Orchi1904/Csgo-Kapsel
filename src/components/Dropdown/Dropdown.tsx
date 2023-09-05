import styles from "./Dropdown.module.css";

type Props = {
    name: string,
    width: string,
    dropdownValues: string[],
}

function Dropdown({name, width, dropdownValues}: Props) {
  return (
    <div className={styles.dropdownContainer}>
        <label htmlFor={name}/>

        <select className={styles.dropdown} name={name} id={name} style={{width: `${width}`}}
                defaultValue="Sort">
            <option value="Sort" disabled hidden>Sort</option>
            {dropdownValues.map((value, index) => (
              <option key={index} value={value}>{value}</option>
            ))}
        </select>
    </div>
  )
}

export default Dropdown