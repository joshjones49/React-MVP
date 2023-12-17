

const Show = ({show}) => {
  return (
    <div className="showDisplay" id={show.id} >
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
    </div>
  )
}

export default Show
