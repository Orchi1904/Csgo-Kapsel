import Dropdown from "../Dropdown/Dropdown";
import Search from "../Search/Search";
import styles from "./InputSection.module.css";

type Props = {
  search?: boolean,
  id: string,
}

function InputSection({ search, id }: Props) {
  return (
    <div className={styles.inputSection}>
      <Dropdown name={id} width="100%" />
      {search ?
        <Search name={id} />
      : ""}
    </div>
  )
}

export default InputSection