
import { useEffect, useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'

const WatchlistsDisplay = ({createdLists, list, onDelete}) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleClick = () => {
    console.log(list.id)
}


const deleteList = async (e) => {
  e.stopPropagation()

  let id = list.id

  try {
    const res = await fetch(`http://localhost:8000/watchlists/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {

      toast('Watchlist Deleted', {
        duration: 2000,
        style: {
          background: 'green',
          color: 'white',
          height: '60px',
          width: '200px',
          fontSize: '30px'
        }
      })

      setIsDeleted(true);

    } else {
      toast('Watchlist Not Deleted', {
        duration: 2000,
        style: {
          background: 'red',
          color: 'white',
          height: '60px',
          width: '200px',
          fontSize: '30px'
        }
      })
    }
  } catch (error) {
    console.error(`Error deleting watchlist with ID ${list.id}: ${error.message}`);
  }
};


  const editList = (e) => {
    e.stopPropagation()
    console.log(list.id)
  }

  if(isDeleted) {
    return null;
  }

  return (
      <div className="listDisplay" id={list.id} onClick={handleClick}>
      <h1>{list.name}</h1>
      <h4>{list.text}</h4>
      <div id='edtdlt'>
      <button onClick={editList} id='edit' className="edt">Edit</button>
      <button onClick={deleteList} id='delete' className="edt">Delete</button>
      </div>
    </div>
  )
}

export default WatchlistsDisplay
