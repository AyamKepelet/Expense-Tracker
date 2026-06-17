import "./Expanse.css"
import Content from "./content/Content"
import MyContext from "/Project JS Skilled/Expense Tracker/src/components/context/Mycontext"
import { useState,useRef } from "react"
export default function Expanse(){
  const [value,setValue] = useState([])  
  const [resultName,setResultName] = useState([])
  
  const inputref = useRef(null)
  
  function inputEvent(){
    inputref.current.value()
  }

  function takeTheInput(){
    setResultName(value)
  }
  return(
    <>
        <div className="w-full justify-center flex h-screen">
          <div className="text-white bg-amber-400 w-max p-8 h-80 rounded-2xl">
            <form className="[&>*]:m-4">
              <input ref={inputref} onChange={(e)=>{
                value.push(e.target.value)
              }} className="border-2 border-solid" type="text"  placeholder="Expense Name"/>
              <input onChange={(e)=>{
                value.push(e.target.value)
              }} className="border-2 border-solid" type="text"  placeholder="Amount"/>
              <select className="border-2 border-solid">
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Others">Others</option>
              </select>
              <input className="border-2 border-solid" type="date" />
              <button onClick={(e)=>{
                e.preventDefault()
                takeTheInput()
                console.log(value);
                console.log(resultName);
                console.log(inputref);
                
}} className="bg-green-500 p-1 hover:bg-green-700 transition duration-300">Add Expense</button>
            </form>
            <div>
            </div>
    <MyContext.Provider value={{resultName}}>
      <Content/>
    </MyContext.Provider>
          </div>
        </div>
    </>
  )
}
