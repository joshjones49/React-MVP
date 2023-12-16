
import Watchlist from "./Watchlist"
import toast, { Toaster } from 'react-hot-toast';


const LeftContainer = () => {

    const notify = () => {
        toast('Watchlist Added!'),
        console.log('added!')
    }

  return (
    <div id='left-container'>
      <h1>Welcome</h1>
      <Watchlist />
      <button onClick={notify} id='submitBtn' className="btn">ADD</button>
    </div>
  )
}

export default LeftContainer
