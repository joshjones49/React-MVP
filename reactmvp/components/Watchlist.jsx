
import InputField from "./InputField"
import { useState } from "react"
import toast, {Toaster} from 'react-hot-toast'

const Watchlist = ({watchlistName, setWatchlistName}) => {

  const [watchlistInput, setWatchlistInput] = useState(Array(8).fill(''))

  const handleClick = async () => {
    const combinedValues = watchlistInput.join(' - ');

    const onlySpaces = /\S/.test(watchlistName) && /\S/.test(combinedValues);  

    if(!watchlistName || !combinedValues) {
      toast.error('Name & List Required', {
        className: 'toastError',
        duration: 2000,
        position: 'top-center',
        style: {
          background: 'red',
          color: 'white'
        }
      });
      return;
    }

    if(!onlySpaces) {
      toast.error('Cannot Contain Only Spaces', {
        className: 'toastError',
        duration: 2000,
        position: 'top-center',
        style: {
          background: 'red',
          color: 'white'
        }
      });
      return;
    }

    try {
      const res = await fetch('http://localhost:8000/watchlists', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({name: watchlistName, text: combinedValues })
      });
      const data = await res.json();
      toast('Watchlist Created!', {
        className: '',
        duration: 2000,
        position: 'top-center',
        style: {
          background: 'green',
          color: 'white',
          height: '70px',
          width: '200px',
          fontSize: '30px'
        }
      });
      setWatchlistInput(Array(8).fill(''))
      setWatchlistName('')
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  

  return (
    <form id='watchlist' >
      <Toaster />
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
       >Add
      </button>
    </form>
  )
}

export default Watchlist
