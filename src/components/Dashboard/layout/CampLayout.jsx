/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'

export default function CampLayout() {
    const [camps, setCamps] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://sehatsampark-backend.onrender.com/get_all_camps",
                    {
                        method: "GET",
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                        },
                        mode: "cors",
                    }
                );

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const data = await response.json();
                console.log("Data from API:", data.camp_data[0].camp_name); // Log data received from the API
                const dataArray = Object.values(data);
                setCamps(data.camp_data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };

        fetchData();
    }, []);

    return (

        <div className=" mt-4">
            <p className="text-2xl my-2 font-extrabold	text-bold text-black">CAMPS</p>
            <div className="flex carousel rounded-box">

                {camps.length === 0 ? (
                    <p>No active camps!</p>
                ) : (
                    camps.map((camp, index) => (
                        <div key={index} className="carousel-item">
                            <div className="card w-[22rem] bg-[#1D232A] mx-2">
                                {/* <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure> */}
                                <div className="card-body p-6">
                                    <h2 className="card-title">{camp.camp_name}</h2>
                                    <p>Capacity: {camp.camp_capacity}</p>
                                    <div className="flex card-actions w-full justify-between">
                                        <div className="p-4 mt-4 badge badge-outline badge-secondary">
                                            {camp.disease_focus}
                                        </div>
                                        <div className="p-4 mt-4 badge badge-outline badge-primary">
                                            {camp.date}
                                        </div>
                                        {/* <button className="btn btn-primary ">View More</button> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}
