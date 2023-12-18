
import InputField from "./InputField"
import { useState } from "react"

const Watchlist = ({watchlistName, setWatchlistName}) => {

  const [watchlistInput, setWatchlistInput] = useState(Array(8).fill(''))

  const handleClick = async () => {
    const combinedValues = watchlistInput.join(', ');
    console.log(combinedValues);

    try {
      const res = await fetch('http://localhost:8000/watchlists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: watchlistName, text: combinedValues })
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  

  return (
    <form id='watchlist' >
      {[...Array(8)].map((_, index) => (
        <InputField 
         key={index}
         value={watchlistInput[index]}
         onChange={(e) => {
          const newValues = [...watchlistInput];
          newValues[index] = e.target.value;
          setWatchlistInput(newValues);
          console.log(e.target.value)
        }} 
         watchlistName={watchlistName} 
         setWatchlistName={setWatchlistName} />
      ))}

      <button 
      id='createBtn' 
      type="button"
      onClick={handleClick}
       >CREATE
      </button>
    </form>
  )
}

export default Watchlist
