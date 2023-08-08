import styles from "./Dropdown.module.css";

type Props = {
    name: string,
    width: string,
}

function Dropdown({name, width}: Props) {
  return (
    <div className={styles.dropdownContainer}>
        <label htmlFor={name}/>

        <select className={styles.dropdown} name={name} id={name} style={{width: `${width}`}}
                defaultValue="Sort">
            <option value="Sort" disabled hidden>Sort</option>
            <option value="Price ASC">Price ASC</option>
            <option value="Price DESC">Price DESC</option>
            <option value="Collection">Collection</option>
        </select>
    </div>
  )
}

export default Dropdown