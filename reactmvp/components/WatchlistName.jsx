



const WatchlistName = ({watchlistName, setWatchlistName}) => {

  const handleInputChange = (e) => {
    setWatchlistName(e.target.value)
    console.log(e.target.value)
  }

  return (
    <input 
    id='watchlistName' 
    type="text" 
    placeholder="Watchlist Name"
    onChange={handleInputChange}
    >
      
    </input>
  )
}

export default WatchlistName
