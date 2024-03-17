/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import CampLayout from './layout/CampLayout';
import DoctorLayout from './layout/DoctorLayout';
import StaffLayout from './layout/StaffLayout';
import { Link } from 'react-router-dom';

export default function Camps({campCount, docCount, staffCount}) {


    return (
        <div>
            <div className=" px-5 lg:px-10 py-10">
                {/* <div className=" border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-4 pt-0 p-4"> */}
                {/* <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Welcome to Flowbite</h1> */}
                {/* <p className="mt-2 text-gray-700 dark:text-gray-300">This is your dashboard. You can customize it to suit your needs.</p> */}

                <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
                    <div className="stat place-items-center">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="m-auto">
                            <div className="stat-title">Active Camps</div>
                            <div className="stat-value">11</div>
                            <div className="stat-desc">Mar 11th - Mar 17th</div>
                        </div>

                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div className="m-auto">
                            <div className="stat-title">Available Doctors</div>
                            <div className="stat-value">10</div>
                            <div className="stat-desc">Mar 11th - Mar 17th</div>
                        </div>
                    </div>

                    <div className="stat">
                        <div className="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
                        </div>
                        <div className="m-auto">
                            <div className="stat-title">Available Staff</div>
                            <div className="stat-value">51</div>
                            <div className="stat-desc">Mar 11th - Mar 17th</div>
                        </div>
                    </div>
                </div>

                <CampLayout campCount={campCount} />

                <Link to="/add-camp">
                    <div className="divider divider-primary pt-6">
                        <button className="btn active:btn-primary">Add Camp</button>
                    </div>
                </Link>

                <DoctorLayout docCount={docCount}/>

                <Link to="/add-doctors">
                    <div className="divider divider-primary pt-6">
                        <button className="btn active:btn-primary">Onboard Doctor</button>
                    </div>
                </Link>

                {/* <div className="">
                </div> */}

                <StaffLayout staffCount={staffCount}/>

                <Link to="/add-staff">
                    <div className="divider divider-primary pt-6">
                        <button className="btn active:btn-primary">Onboard Staff</button>
                    </div>
                </Link>


            </div>
        </div>
    );
}

