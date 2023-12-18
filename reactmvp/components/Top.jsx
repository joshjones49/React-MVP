
import Searchers from "./Searchers"



const Top = ({shows, fetchShows, summary}) => {
  return (
    <div id='top' >
        <div id='siteName' >BINGEBURST.COM</div>

     <Searchers summary={summary} fetchShows={fetchShows} shows={shows} />
    </div>
  )
}

export default Top
