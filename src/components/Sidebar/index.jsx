/* eslint-disable no-unused-vars */
import React from 'react'
import Dashboard from "../Dashboard/index"
import { Link } from 'react-router-dom'

export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col p-4">

          {/* Navbar */}
          <div className=" navbar bg-[#1D232A] rounded-xl">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <h1 className="text-3xl font-extrabold">Sehat Sampark</h1>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                {/* <li><a></a></li> */}
                {/* <li><a></a></li> */}
              </ul>
            </div>
          </div>



          {/* Page content here */}
          <div>
            <Dashboard />

          </div>
        </div>


        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <div className="menu w-72 h-full pr-0 bg-black">
            <ul className=" h-full  rounded-lg p-2 align-items-center">
              <li><a className="mx-auto hover:bg-gray-300 hover:text-black">Dashboard</a></li>
              <li><a className="mx-auto hover:bg-gray-300 hover:text-black">Add Camp</a></li>
              <Link to="/add-doctor">Onboard Doctor</Link>
              <li><a className="mx-auto hover:bg-gray-300 hover:text-black">Onboard Staff</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
