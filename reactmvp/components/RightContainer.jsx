

import Show from "./Show"

const RightContainer = ({shows, updateSum}) => {

  
  return (
    <div id='RightContainer' className="container">
       {shows.map((show) => (
        <Show 
        show={show}
        key={show.id}
        updateSum={updateSum} />
      ))}
    </div>
  )
}

export default RightContainer
