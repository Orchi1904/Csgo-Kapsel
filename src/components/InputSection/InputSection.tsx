import sortFunctions from "@/helper/sortFunctions";
import Dropdown from "../Dropdown/Dropdown";
import Search from "../Search/Search";
import styles from "./InputSection.module.css";

type Props = {
  search?: boolean,
  id: string,
  dropdownValues: string[],
  setSorting: (sorting: keyof typeof sortFunctions) => void,
}

function InputSection({ search, id, dropdownValues, setSorting }: Props) {
  return (
    <div className={styles.inputSection}>
      <Dropdown name={id} width="100%" dropdownValues={dropdownValues} setSorting={setSorting}/>
      {search ?
        <Search name={id} width="100%"/>
      : ""}
    </div>
  )
}

export default InputSection