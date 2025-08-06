import { useState } from "react"
import { Link } from "react-router-dom"

function Header(){

  const [isopen, setisopen]=useState(false)
  function handleisopen(){
    if(isopen===false){
      setisopen(true)
    }else{
      setisopen(false)
    }
  }
    return <>
      <div>
    <div className="flex  justify-between items-center py-3 sm:px-11 px-2 bg-gray-200 text-gray-700 overflow-hidden">
      <h1 className="font-semibold text-2xl">My First <span className="text-blue-600">React</span> App</h1>
      <i onClick={handleisopen} className="fa-solid fa-bars text-4xl hover:text-blue-600 sm:hidden "></i>
      <div className="sm:flex gap-11 items-center hidden">
        <ul className="flex gap-14 text-xl font-semibold cursor-pointer text-gray-700">
          <Link to="/"><li className="hover:text-blue-600">Home</li></Link>
         <Link to="About"> <li  className="hover:text-blue-600">About</li></Link>
          <Link to="contact"><li  className="hover:text-blue-600">Contact</li></Link>
        </ul>
        <div>
            <button className="px-10 py-2 bg-blue-500 hover:bg-gray-400 text-white rounded-2xl">Contact </button>
        </div>
      </div>
    </div>
    {/* mobile view */}
    <div style={{display:isopen===true?"block":""}} className="bg-blue-500 hidden  text-center text-white h-48">
        <ul className=" text-2xl font-semibold cursor-pointer   pt-6">
          <Link to="/"><li className="hover:bg-white hover:text-blue-500 py-1">Home</li></Link>
         <Link to="About"> <li  className="hover:bg-white hover:text-blue-500 mt-3 py-1">About</li></Link>
          <Link to="contact"><li  className="hover:bg-white hover:text-blue-500 mt-2 py-1">Contact</li></Link>
        </ul>
      </div>

   </div>
    </>

}
export default Header