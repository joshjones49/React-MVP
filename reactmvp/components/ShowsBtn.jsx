
import { useEffect } from "react";



const ShowsBtn = ({shows, fetchShows, isFetched, setIsFetched, setShows, getShows}) => {

  const handleClick = () => {
    if(!isFetched) {
      fetchShows();
      setIsFetched(true);
    } else {
      setIsFetched(false);
      getShows();
    }
  }

  return (
    <button 
    type='button' 
    onClick={handleClick} 
    className="subBtn">
      {isFetched ? 'RESET' : 'SEARCH'}
    </button>
  )
}

export default ShowsBtn
