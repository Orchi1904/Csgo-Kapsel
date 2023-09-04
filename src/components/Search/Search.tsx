import styles from "./Search.module.css";
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  name: string,
  width: string,
}

function Search({ name, width }: Props) {
  return (
    <div className={styles.searchContainer} style={{width}}>
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