

import WatchlistsDisplay from "./WatchlistsDisplay"

const MidContainer = ({shows, fetchShows, showInput, createdLists, currentSum, clear, setSumVisable, sumVisable}) => {

  

  return (
    <div id='MidContainer' className="container">
      {createdLists.map((list) => (
        <WatchlistsDisplay 
        list={list}
        key={list.id} />
      ))}


        <div id='sumHolder'>
          
          <p id='sum'>{currentSum}</p>
          {sumVisable ? (
            <button id='clear' onClick={clear}>Clear</button>
          ) : null}
        </div>
    </div>
  )
}

export default MidContainer
