



const InputField = ({watchlistName, value, onChange}) => {
  const handleOnChange = (e) => {
    console.log(watchlistName, e.target.value)
  }

  return (
    <input 
    className="listInput"
    value={value}
    onChange={onChange}
    >
    </input>
  )
}

export default InputField
