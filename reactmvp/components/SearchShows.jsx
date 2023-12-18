
import ShowsBtn from "./ShowsBtn"


const SearchShows = ({shows, fetchShows, handleInputChange, setShowInput, showInput, isFetched, setIsFetched, setShows, getShows}) => {
  return (
    <form className="form" >
    <input className="searchers" type="search" placeholder="Search Shows" onChange={handleInputChange} />
      <ShowsBtn 
      shows={shows}
      setShows={setShows}
      getShows={getShows}
      fetchShows={fetchShows} 
      showInput={showInput}
      isFetched={isFetched}
      setIsFetched={setIsFetched}      
      />
    </form>
  )
}

export default SearchShows
