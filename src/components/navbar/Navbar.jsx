import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <>
      <div className="flex w-full h-max justify-center items-center">
        <div className="flex justify-center m-8 text-white w-[15rem] text-2xl bg-amber-400">
            <p>Expense Tracker</p>
        </div>
      </div>
    </>
  )
}

export default Navbar
