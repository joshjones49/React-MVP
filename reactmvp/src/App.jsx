



import { useEffect, useState } from 'react'
import './App.css'
import Top from '../components/Top'
import MainContainer from '../components/MainContainer'
import toast, {Toaster} from 'react-hot-toast'

function App() {

  const [shows, setShows] = useState([]);
  const [showInput, setShowInput] = useState('');
  const [isFetched, setIsFetched] = useState(false);
  const [watchlistName, setWatchlistName] = useState('');
  const [createdLists, setCreatedLists] = useState([]);
  const [listFetched, setListFetched] = useState(false);
  const [currentSum, setCurrentSum] = useState('');
  const [sumVisable, setSumVisable] = useState(false)

  const updateSum = (summary) => {
    setCurrentSum(summary);
    setSumVisable(true)
  }

  const clear = () => {
    setCurrentSum('');
    setSumVisable(false);
  }

  const fetchWatchlists = async () => {

   if(!listFetched) {
    const res = await fetch('http://localhost:8000/watchlists')
    const data = await res.json()
    setCreatedLists(data)
    setListFetched(true)
    console.log(createdLists)
  } else {
    setCreatedLists([])
    setListFetched(false)
  }
}


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
        style: {
          background: 'red',
          color: 'white'
        }
      });
      return;
    }
    const res = await fetch(`/shows/${name}`)
    const data = await res.json()
    setShows(data)
    setIsFetched(true)
  }

  useEffect(() => {
    const placeShows = async () => {
      const res = await fetch(`/shows`)
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
      listFetched={listFetched}
      createdLists={createdLists}
      fetchWatchlists={fetchWatchlists} 
      fetchShows={fetchShows} 
      shows={shows} 
      showInput={showInput}
      watchlistName={watchlistName}
      setWatchlistName={setWatchlistName}
      updateSum={updateSum}
      currentSum={currentSum}
      clear={clear}
      setSumVisable={setSumVisable}
      sumVisable={sumVisable}
      />
    </div>
  )
}


export default App
