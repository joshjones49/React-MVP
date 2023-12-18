

function displayInfo(show) {
    console.log(show.summary)
}

const Show = ({show}) => {
  return (
    <div className="showDisplay" id={show.id} onClick={() => displayInfo(show)}>
      <h1>{show.name}</h1>
      <h4>IMAGE COMING</h4>
    </div>
  )
}

export default Show
