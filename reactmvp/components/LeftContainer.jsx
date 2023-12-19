
import Watchlist from "./Watchlist"
import WatchlistName from "./WatchlistName"

const LeftContainer = ({watchlistName, setWatchlistName, fetchWatchlists, listFetched}) => {
  return (
    <div id='LeftContainer' className="container" >
      <h1 id="header">Create A Watchlist!</h1>
      <h5>or click for existing lists</h5>
      <button 
      id='getLists' 
      type="button" 
      onClick={fetchWatchlists}>
        Watchlists/Clear
        </button>
      <WatchlistName watchlistName={watchlistName} setWatchlistName={setWatchlistName} />
      <Watchlist watchlistName={watchlistName} setWatchlistName={setWatchlistName} />
      <small>BINGEBURST.COM, Create Your Binge List!</small>
    </div>
  )
}

export default LeftContainer
