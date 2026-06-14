import "./Expanse.css"
import Content from "./content/Content"
import { createContext } from "react"
export default function Expanse(){
  return(
    <>
        <div className="w-full justify-center flex h-screen">
          <div className="text-white bg-amber-400 w-max p-8 h-80 rounded-2xl">
            <form className="[&>*]:m-4">
              <input className="border-2 border-solid" type="text" required placeholder="Expense Name"/>
              <input className="border-2 border-solid" type="text" required placeholder="Amount"/>
              <select className="border-2 border-solid">
                <option value="All">All</option>
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
                <option value="Others">Others</option>
              </select>
              <input className="border-2 border-solid" type="date" required/>
              <button className="bg-green-500 p-1 hover:bg-green-700 transition duration-300">Add Expense</button>
            </form>
            <div>
            </div>
          </div>
        </div>

      <Content/>
    </>
  )
}
