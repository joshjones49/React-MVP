
import { useState } from 'react'
import toast, {Toaster} from 'react-hot-toast'

const WatchlistsDisplay = ({createdLists, list}) => {
  const [isDeleted, setIsDeleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(list.text);
  const [editName, setEditName] = useState(list.name)

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
    setIsEditing(true)
  }

  const saveChanges = async (e) => {
    e.stopPropagation()
    setIsEditing(false)

    let id = list.id

    try {
      const res = await fetch(`http://localhost:8000/watchlists/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: editName, text: editedText}),
      });
  
      if (res.ok) {
        console.log(`List with ID ${id} updated successfully`);
      } else {
        console.error(`Failed to update watchlist with ID ${id}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  if(isDeleted) {
    return null;
  }

  const handleOnChangeName = (e) => {
    setEditName(e.target.value)
    console.log(e.target.value)
  }

  const handleOnChangeText = (e) => {
    setEditedText(e.target.value)
    console.log(e.target.value)
  }

  return (
      <div className="listDisplay" id={list.id} onClick={handleClick}>
      <h1 
      contentEditable={isEditing} 
      id='listName'>{isEditing ? (
        <input
        className='editField' 
        type='text' 
        value={editName} 
        onChange={handleOnChangeName} />
      ) : (editName)}
      </h1>
      <h4 
      contentEditable={isEditing} 
        id='summary'>{isEditing ? (
         <input
         className='editField' 
          type='text' 
          value={editedText} 
          onChange={handleOnChangeText} />
      ) : editedText}</h4>
      <div id='edtdlt'>
      <button onClick={isEditing ? saveChanges : editList} id='edit' className="edt">{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={deleteList} id='delete' className="edt">Delete</button>
      </div>
    </div>
  )
}

export default WatchlistsDisplay
