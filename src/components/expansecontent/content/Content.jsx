import "./content.css"
import { useContext } from "react"
import MyContext from "/Project JS Skilled/Expense Tracker/src/components/context/Mycontext"

export default function Content() {
    const {resultName} = useContext(MyContext) 
    return(
        <>
        <div className="w-full flex justify-center bg-gray-400">
            <ul className="[&>*]:ml-20 flex">
                <li className="flex flex-col">
                    <h3 className="border-t-0 border border-b-0">Expense Name</h3>
                    <p className="border-t-0 border border-b-0 text-black">{resultName}</p>
                </li>
        
                <li className="flex flex-col">
                    <h3 className="border-t-0 border border-b-0">Amount</h3>
                    <p className="border-t-0 border border-b-0 text-black">{resultName}</p>
                </li>
            
        
                <li className="flex flex-col">
                    <h3 className="border-t-0 border border-b-0">Category</h3>
                    <p className="border-t-0 border border-b-0 text-black"></p>
                </li>
            
        
                <li className="flex flex-col">
                    <h3 className="border-t-0 border border-b-0">Date</h3>
                    <p className="border-t-0 border border-b-0 text-black"></p>
                </li>
            
        
                <li className="flex flex-col">
                    <h3 className="border-t-0 border border-b-0">Action</h3>
                    <p className="border-t-0 border border-b-0 text-black"></p>
                </li>
            </ul>
            
        </div>
        </>
    )
};
