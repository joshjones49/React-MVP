
import Searchers from "./Searchers"



const Top = ({shows, fetchShows, handleInputChange, showInput, setShowInput, isFetched, setIsFetched, setShows, getShows}) => {
  return (
    <div id='top' >
        <div id='siteName' >BINGEBURST.COM</div>
     <Searchers 
     showInput={showInput} 
     setShowInput={setShowInput} 
     handleInputChange={handleInputChange}
     fetchShows={fetchShows} 
     shows={shows}
     setShows={setShows}
     getShows={getShows}
     isFetched={isFetched}
     setIsFetched={setIsFetched} 
     />
    </div>
  )
}

export default Top
