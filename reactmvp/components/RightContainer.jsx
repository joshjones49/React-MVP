
import Display from "./Display"


const RightContainer = ({shows}) => {
  return (
    <div id='right-container'>
      <input id='searchBar' 
      className="input" 
      type='search'
      placeholder="SEARCH">
      </input>

      <Display shows={shows}/>
    </div>
  )
}

export default RightContainer
