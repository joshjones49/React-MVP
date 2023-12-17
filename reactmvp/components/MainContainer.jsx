
import LeftContainer from "./LeftContainer"
import RightContainer from "./RightContainer"
import MidContainer from "./MidContainer"


const MainContainer = ({shows}) => {
  return (
    <div id='mainContainer'>
        <LeftContainer />
        <MidContainer />
        <RightContainer shows={shows}/>
    </div>
  )
}

export default MainContainer
