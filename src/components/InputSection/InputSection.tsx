import { capsuleSortFunctions, stickerSortFunctions } from "@/helper/sortFunctions";
import Dropdown from "../Dropdown/Dropdown";
import Search from "../Search/Search";
import styles from "./InputSection.module.css";

type Props = {
  search?: boolean,
  id: string,
  dropdownValues: string[],
  type: "capsuleSort" | "stickerSort",
  setSorting: (sorting: any) => void,
  setSearchTerm?: (searchTerm: string) => void
}

function InputSection({ search, id, dropdownValues, type, setSorting, setSearchTerm }: Props) {
  return (
    <div className={styles.inputSection}>
      <Dropdown name={id} dropdownValues={dropdownValues} defaultValue="Sort" setSorting={setSorting} 
                type={type}/>
      {search ?
        <Search name={id} width="100%" setSearchTerm={setSearchTerm}/>
        : ""}
    </div>
  )
}

export default InputSection