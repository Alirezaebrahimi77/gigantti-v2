import {useState, useEffect, useRef} from "react"
import SearchIcon from '@mui/icons-material/Search';
function Search({className}) {
    const [clicked, setClicked] = useState(false)
    const ref = useRef()

    const searchHandler = () => {
        setClicked(true)
    }
  
    useEffect(() => {
      const checkIfClickedOutside = e => {
        
        if (clicked && ref.current && !ref.current.contains(e.target)) {
          setClicked(false)
        }
      }
  
      document.addEventListener("mousedown", checkIfClickedOutside)
  
      return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
    }, [clicked])

  return (
    <div ref={ref} className={`flex flex-1 items-center justify-between transition duration-300 bg-gray-100 border rounded-3xl py-1 px-3 ${className} ${clicked && 'rounded-md border-giganttiGreenIcon shadow-xl bg-[#ffffff]'}`}>
    <input type="text" placeholder='Hae tuotteita, kategorioita tai artikkeleita' className='p-2 bg-transparent outline-none text-gray-400 w-full' onClick={searchHandler}/>
    <SearchIcon className="text-giganttiGreenIcon transition duration-150 hover:scale-110 cursor-pointer"/>

    </div>
  )
}

export default Search