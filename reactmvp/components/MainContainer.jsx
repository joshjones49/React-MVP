
import LeftContainer from "./LeftContainer"
import RightContainer from "./RightContainer"
import MidContainer from "./MidContainer"


const MainContainer = ({shows, watchlistName, setWatchlistName}) => {
  return (
    <div id='mainContainer'>
        <LeftContainer watchlistName={watchlistName} setWatchlistName={setWatchlistName}  />
        <MidContainer shows={shows}/>
        <RightContainer shows={shows}/>
    </div>
  )
}

export default MainContainer
