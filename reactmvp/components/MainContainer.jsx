
import LeftContainer from "./LeftContainer"
import RightContainer from "./RightContainer"
import MidContainer from "./MidContainer"


const MainContainer = ({shows, watchlistName, setWatchlistName, fetchWatchlists, createdLists, currentSum, updateSum, clear, sumVisable, setSumVisable}) => {
  return (
    <div id='mainContainer'>
        <LeftContainer 
          fetchWatchlists={fetchWatchlists} 
          watchlistName={watchlistName} 
          setWatchlistName={setWatchlistName}
        />

        <MidContainer 
          createdLists={createdLists} 
          shows={shows}
          currentSum={currentSum}
          clear={clear}
          setSumVisable={setSumVisable}
          sumVisable={sumVisable}/>


        <RightContainer 
          shows={shows}
          updateSum={updateSum}/>
    </div>
  )
}

export default MainContainer
