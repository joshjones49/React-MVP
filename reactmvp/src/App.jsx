



import { useEffect, useState } from 'react'
import './App.css'
import Top from '../components/Top'
import MainContainer from '../components/MainContainer'

function App() {

  const [shows, setShows] = useState([]);
  const [summary, setSummary] = useState('')

  const fetchShows = async (elem) => {
    let name = elem;
    const res = await fetch(`http://localhost:8000/shows/${name}`)
    const data = await res.json()
    setSummary(data)
    console.log(data)
  }

  useEffect(() => {

    const getShows = async () => {
      const res = await fetch('http://localhost:8000/shows')
      const data = await res.json()
      setShows(data)
    }

    getShows()

  }, []) 


  return (
    <div>
      <Top shows={shows} fetchShows={fetchShows} />
      <MainContainer summary={summary} shows={shows}/>
    </div>
  )
}


export default App
