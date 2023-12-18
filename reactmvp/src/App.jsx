



import { useEffect, useState } from 'react'
import './App.css'
import Top from '../components/Top'
import MainContainer from '../components/MainContainer'
import ShowsBtn from '../components/ShowsBtn'
import toast, {Toaster} from 'react-hot-toast'

function App() {

  const [shows, setShows] = useState([]);
  const [showInput, setShowInput] = useState('');
  const [isFetched, setIsFetched] = useState(false);
  const [watchlistName, setWatchlistName] = useState('')

  const handleInputChange = (e) => {
    setShowInput(e.target.value)
  }

  const fetchShows = async () => {
    let name = showInput;
    if (name === '') {
      toast.error('Field Is Empty', {
        className: 'toastError',
        duration: 2000,
        position: 'top-center',
      });
      return;
    }
    const res = await fetch(`http://localhost:8000/shows/${name}`)
    const data = await res.json()
    setShows(data)
    setIsFetched(true)
  }

  useEffect(() => {

    const placeShows = async () => {
      const res = await fetch('http://localhost:8000/shows')
      const data = await res.json()
      setShows(data)
    }

    placeShows()

  }, []) 


    const getShows = async () => {
      const res = await fetch('http://localhost:8000/shows')
      const data = await res.json()
      setShows(data)
    }

    
    





  return (
    <div>

      <Toaster />

      <Top 
      handleInputChange={handleInputChange} 
      shows={shows}
      setShows={setShows}
      getShows={getShows}
      fetchShows={fetchShows} 
      showInput={showInput}
      setShowInput={setShowInput}
      isFetched={isFetched}
      setIsFetched={setIsFetched}
      />


      <MainContainer 
      fetchShows={fetchShows} 
      shows={shows} 
      showInput={showInput}
      watchlistName={watchlistName}
      setWatchlistName={setWatchlistName}
      />
    </div>
  )
}


export default App
