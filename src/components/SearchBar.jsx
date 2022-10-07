import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import search from '../assets/images/li_search.png'
import style from '../assets/styles/searchbar.module.css'

const SearchBar = () => {
  return (
    <div className={style.searchArea}>
        <span>All Categories <MdOutlineKeyboardArrowDown style={{cursor: "pointer"}} size={18} />  </span> 
        <input type="text" placeholder='Search for items...' className={style.searchInput} />
        <div>
            <img src={search} alt="" />
        </div>
    </div>
  )
}

export default SearchBar