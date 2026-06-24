import "./Expanse.css"
import Content from "./content/Content"
import MyContext from "../../components/Mycontext/Mycontext"
import { useState,useRef, useEffect } from "react"
export default function Expanse(){

  const [expenses,setExpenses] = useState([])  
  const nameref = useRef(null)
  const amountref = useRef(null)
  const selectref = useRef(null)
  const dateref = useRef(null)
  
  function TakeTheInput(){
    const expenses = {
      name: nameref.current.value,
      amount: amountref.current.value,
      select: selectref.current.value,
      date: dateref.current.value
    }

    setExpenses((prev) => [...prev, expenses])
    nameref.current.value = ""
    amountref.current.value = ""
    selectref.current.value = ""
    dateref.current.value = ""
  }

  useEffect(()=>{
    console.log("current object", expenses);
    console.log("just the value", Object.values(expenses));
    
  },[expenses])

  return(
    <>
        <div className="w-full justify-center flex h-screen">
          <div className="text-white bg-amber-400 w-max p-8 h-max rounded-2xl">
            <form className="[&>*]:m-10">
              <input ref={nameref} className="border-2 border-solid" type="text"  placeholder="Expense Name"/>
              <input ref={amountref} type="number" min={0} className=" text-center border-2 border-solid"  placeholder="Amount"/>
              <select ref={selectref} className="border-2 border-solid text-black bg-amber-400">
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Others">Others</option>
              </select>
              <input ref={dateref} className="border-2 border-solid" type="date" />
              <button onClick={(e)=>{
                e.preventDefault()
                TakeTheInput()
                console.log(expenses[0]);
                console.log(expenses[1]);
}} className="bg-green-500 p-1 hover:bg-green-700 rounded transition duration-300">Add Expense</button>
            </form>
            <div>
            </div>
    <MyContext.Provider value={{expenses,setExpenses}}>
      <Content/>
    </MyContext.Provider>
          </div>
        </div>
    </>
  )
}
