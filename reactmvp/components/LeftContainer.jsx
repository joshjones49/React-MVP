
import Watchlist from "./Watchlist"
import WatchlistName from "./WatchlistName"

const LeftContainer = ({watchlistName, setWatchlistName}) => {
  return (
    <div id='LeftContainer' >
      <h1 id="header">Create Your Watchlist!</h1>
      <WatchlistName watchlistName={watchlistName} setWatchlistName={setWatchlistName} />
      <Watchlist watchlistName={watchlistName} setWatchlistName={setWatchlistName} />
      <small>BINGEBURST.COM, Come and binge your favorite shows!</small>
    </div>
  )
}

export default LeftContainer
