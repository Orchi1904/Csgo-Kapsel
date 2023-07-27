import styles from "./Search.module.css";
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  name: string,
}

function Search({ name }: Props) {
  return (
    <div className={styles.searchContainer}>
      <label htmlFor={name} />
      <input className={styles.search}
        name={name}
        id={name}
        placeholder="Search Capsule..." />
      <SearchIcon className={styles.searchIcon}/>
    </div>
  )
}

export default Search