
import WatchlistBtn from "./WatchlistBtn"


const SearchWatchlists = () => {
  return (
    <form className="form">
    <input className="searchers" type='search' placeholder="Search Watchlists"/>
      <WatchlistBtn />
    </form>
  )
}

export default SearchWatchlists
