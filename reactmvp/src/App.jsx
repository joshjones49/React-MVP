



import { useState } from 'react'
import './App.css'
import LeftContainer from '../components/LeftContainer'
import RightContainer from '../components/RightContainer'
import toast, { Toaster } from 'react-hot-toast';

function App() {


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
      <RightContainer />
    </div>
  )
}


export default App
