

function displayInfo(show) {
    console.log(show.summary)
}

const Show = ({show}) => {
  return (
    <div className="showDisplay" id={show.id} onClick={() => displayInfo(show)} >
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
    </div>
  )
}

export default Show
