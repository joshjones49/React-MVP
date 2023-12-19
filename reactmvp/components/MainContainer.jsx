
import LeftContainer from "./LeftContainer"
import RightContainer from "./RightContainer"
import MidContainer from "./MidContainer"


const MainContainer = ({shows, watchlistName, setWatchlistName, fetchWatchlists, createdLists}) => {
  return (
    <div id='mainContainer'>
        <LeftContainer 
          fetchWatchlists={fetchWatchlists} 
          watchlistName={watchlistName} 
          setWatchlistName={setWatchlistName}
        />
        <MidContainer createdLists={createdLists} shows={shows}/>
        <RightContainer shows={shows}/>
    </div>
  )
}

export default MainContainer
