
import ShowsBtn from "./ShowsBtn"


const SearchShows = ({shows, fetchShows, summary}) => {
  return (
    <form className="form" >
    <input value={summary} className="searchers" type="search" placeholder="Search Shows"/>
      <ShowsBtn summary={summary} shows={shows} fetchShows={fetchShows} />
    </form>
  )
}

export default SearchShows
