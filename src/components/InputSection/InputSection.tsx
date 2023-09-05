import Dropdown from "../Dropdown/Dropdown";
import Search from "../Search/Search";
import styles from "./InputSection.module.css";

type Props = {
  search?: boolean,
  id: string,
  dropdownValues: string[],
}

function InputSection({ search, id, dropdownValues }: Props) {
  return (
    <div className={styles.inputSection}>
      <Dropdown name={id} width="100%" dropdownValues={dropdownValues}/>
      {search ?
        <Search name={id} width="100%"/>
      : ""}
    </div>
  )
}

export default InputSection