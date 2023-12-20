


const Show = ({show, updateSum}) => {

  const dispalySum = () => {
    updateSum(show.summary)
  }

  return (
    <div className="showDisplay" id={show.id} onClick={dispalySum}>
      <img src={show.image}/>
      <h1 id='showName' >{show.name}</h1>
      {/* <h4 id='showSummary' >{show.summary}</h4> */}
    </div>
  )
}

export default Show
