

import WatchlistsDisplay from "./WatchlistsDisplay"

const MidContainer = ({shows, fetchShows, showInput, createdLists}) => {

  

  return (
    <div id='MidContainer' className="container">
      {createdLists.map((list) => (
        <WatchlistsDisplay 
        list={list}
        key={list.id} />
      ))}
    </div>
  )
}

export default MidContainer
