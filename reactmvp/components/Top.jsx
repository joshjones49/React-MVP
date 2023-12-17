

const Top = () => {
  return (
    <div id='top' >
        <div id='siteName' >BINGEBURST.COM</div>

     <div id='searchContainer'>
        <form className="form">
            <input className="searchers" type="search" placeholder=" Find Watchlists" />
            <button className="subBtn" >submit</button>
        </form>
      
        <form className="form">
            <input className="searchers" type="search" placeholder="Find Shows" />
            <button className="subBtn" >submit</button>
        </form>
      </div>
    </div>
  )
}

export default Top
