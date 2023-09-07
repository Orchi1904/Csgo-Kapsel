import styles from "./Search.module.css";
import SearchIcon from '@mui/icons-material/Search';

type Props = {
  name: string,
  width: string,
  setSearchTerm?: (searchTerm: string) => void,
}

function Search({ name, width, setSearchTerm }: Props) {
  return (
    <div className={styles.searchContainer} style={{width}}>
      <label htmlFor={name} />
      <input className={styles.search}
        name={name}
        id={name}
        placeholder="Search Capsule..." 
        onChange={(e) => {setSearchTerm && setSearchTerm(e.target.value)}}/>
      <SearchIcon className={styles.searchIcon}/>
    </div>
  )
}

export default Search