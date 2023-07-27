import Dropdown from "../Dropdown/Dropdown";
import Search from "../Search/Search";
import styles from "./InputSection.module.css";

function InputSection() {
  return (
    <div className={styles.inputSection}>
        <Dropdown name="capsuleSort" width="100%"/>
        <Search name="capsuleSearch"/>
    </div>
  )
}

export default InputSection