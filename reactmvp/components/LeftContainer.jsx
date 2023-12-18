
import Watchlist from "./Watchlist"
import WatchlistName from "./WatchlistName"

const LeftContainer = () => {
  return (
    <div id='LeftContainer' >
      <h1 id="header">Create Your Watchlist!</h1>
      <WatchlistName />
      <Watchlist />
      <small>BINGEBURST.COM, Come and binge your favorite shows!</small>
    </div>
  )
}

export default LeftContainer
