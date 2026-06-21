import "./content.css"
import { useContext } from "react"
import MyContext from "../../Mycontext/Mycontext"

export default function Content() {
    const {expenses} = useContext(MyContext) 
    return(
        <>
        <div className="w-full flex justify-center flex-col bg-gray-400 p-4">
                <ul className="w-full justify-center *:pl-1 [&>*]:ml-20 flex">
                    <li className="w-35 pl-0"><h3 className="border rounded p-2 font-bold text-black text-center">Expense Name</h3></li>
                    <li className="w-32"><h3 className="border rounded p-2 font-bold text-black text-center">Amount</h3></li>
                    <li className="w-32"><h3 className="border rounded p-2 font-bold text-black text-center">Category</h3></li>
                    <li className="w-32"><h3 className="border rounded p-2 font-bold text-black text-center">Date</h3></li>
                    <li className="w-32"><h3 className="border rounded p-2 font-bold text-black text-center">Action</h3></li>
                </ul>
            {
            expenses.map((expense,index)=>(
            <ul className="flex w-full h-max items-center bg-gray-700 mt-3 justify-center [&>*]:ml-20" key={index}>
            <li className="flex flex-col items-center w-32">
                <p className="border rounded p-2 text-white bg-gray-600 w-full text-center">{expense.name}</p>
            </li>
            <li className="flex flex-col items-center w-32">
                <p className="border text-center rounded p-2 text-white bg-gray-600 w-full">{expense.amount}</p>
            </li>
            <li className="flex flex-col items-center w-32">
                <p className="border rounded p-2 text-white bg-gray-600 w-full text-center">{expense.select}</p>
            </li>
            <li className="flex flex-col items-center w-32">
                <p className="border rounded p-2 text-white bg-gray-600 w-full text-center">{expense.date}</p>
            </li>
            <li className="flex flex-col items-center w-32">
                <p className="border rounded p-2 text-center">
                    <button className="bg-red-700 text-white font-bold px-3 py-1 rounded hover:bg-red-900 transition">Delete</button>
                </p>
            </li>
            </ul>
            ))}
        </div>
        </>
    )
};
