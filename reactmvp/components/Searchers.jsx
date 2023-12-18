

import SearchWatchlists from "./SearchWatchlists"
import SearchShows from "./SearchShows"

const Searchers = ({shows, fetchShows, handleInputChange, setShowInput, showInput, isFetched, setIsFetched, setShows, getShows}) => {
  return (
    <div className="form">
        <SearchShows 
        handleInputChange={handleInputChange} 
        shows={shows}
        setShows={setShows}
        getShows={getShows} 
        fetchShows={fetchShows} 
        showInput={showInput} 
        setShowInput={setShowInput}
        isFetched={isFetched}
        setIsFetched={setIsFetched}
        />



        <SearchWatchlists />
    </div>
  )
}

export default Searchers
