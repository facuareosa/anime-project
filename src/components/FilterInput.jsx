import { useState } from "react";

function FilterInput({onButtonClick}) {
    const [inputValue, setInputValue] = useState("");

    const handleOnChange = (e)=> {
        const value = e.target.value.toLowerCase();
        setInputValue(value)

    }
    const handleOnClick = ()=>{
        onButtonClick(inputValue)
        setInputValue("");
    }
  return (
    <>
        <input 
            type='text'
            placeholder='Buscar...'
            onChange={handleOnChange}
            value={inputValue}
        />
        <button onClick={handleOnClick}>oks</button>
    </>
  )
}

export default FilterInput