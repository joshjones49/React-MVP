

import Show from "./Show"

const RightContainer = ({shows}) => {
  return (
    <div id='RightContainer' className="container">
       {shows.map((show) => (
        <Show 
        show={show}
        key={show.id} />
      ))}
    </div>
  )
}

export default RightContainer
