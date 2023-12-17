



import { useEffect, useState } from 'react'
import './App.css'
import LeftContainer from '../components/LeftContainer'
import RightContainer from '../components/RightContainer'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  const [shows, setShows] = useState([])

  useEffect(() => {
    const getShows = async () => {
      const res = await fetch('http://localhost:8000/shows')
      const data = await res.json()
      setShows(data)
    }

    getShows()

  }, [])


  return (
    <div id='app'> 
      <Toaster
  toastOptions={{
    className: '',
    style: {
      border: '3px solid white',
      padding: '16px',
      color: 'white',
      background: '#1f487eff'
    },
  }}
/>
      <LeftContainer />
      <RightContainer shows={shows}/>
    </div>
  )
}


export default App
