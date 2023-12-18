




const ShowsBtn = ({shows, fetchShows, summary}) => {
  return (
    <button type='button' onClick={() => fetchShows(shows)} className="subBtn">
      SEARCH
    </button>
  )
}

export default ShowsBtn
