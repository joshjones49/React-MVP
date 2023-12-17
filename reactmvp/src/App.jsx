



import { useEffect, useState } from 'react'
import './App.css'
import Top from '../components/Top'
import MainContainer from '../components/MainContainer'

function App() {

  const [shows, setShows] = useState([]);

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
      <Top />
      <MainContainer shows={shows}/>
    </div>
  )
}


export default App
