


const Show = ({show}) => {

  function displayInfo() {
    console.log(show.summary)
}


  return (
    <div className="showDisplay" id={show.id} onClick={() => displayInfo(show)}>
      <img src={show.image}/>
      <h1 id='showName' >{show.name}</h1>
      <h4 id='showSummary' >{show.summary}</h4>
    </div>
  )
}

export default Show
