

import SearchWatchlists from "./SearchWatchlists"
import SearchShows from "./SearchShows"

const Searchers = ({shows, fetchShows, summary}) => {
  return (
    <div className="form">
        <SearchShows summary={summary} shows={shows} fetchShows={fetchShows} />
        <SearchWatchlists />
    </div>
  )
}

export default Searchers
