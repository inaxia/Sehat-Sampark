/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'


export default function DoctorLayout() {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const fetchDoctorData = async () => {
            try {
                const response = await fetch(
                    "https://sehatsampark-backend.onrender.com/get_all_doctors",
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
                console.log("Data from API:", data.doctor_data); // Log data received from the API
                const dataArray = Object.values(data);
                setDoctors(data.doctor_data);
            } catch (error) {
                console.error("Fetch error:", error);
            }
        };
        fetchDoctorData();
    }, []);


    return (
        <div className=" mt-10">
            <p className="text-2xl my-2 font-extrabold text-black">DOCTORS</p>
            <div className="flex carousel rounded-box">
                {doctors.map((doctor, index) => {
                    return (
                        <div key={index} className="carousel-item">
                            <div className="card w-64 bg-[#1D232A] mx-2">
                                <figure className="px-10 pt-5 py-5 avatar">
                                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://cdn.pixabay.com/photo/2020/05/25/03/37/doctor-5216835_1280.png" />
                                    </div>
                                </figure>
                                <div className="card-body items-center pt-0">
                                    <h2 className="card-title">{doctor.full_name}</h2>
                                    <p>
                                        Years of Experience:{" "}
                                        <span className="font-bold">{doctor.years_of_experience}</span>
                                    </p>
                                    <p>Expertise:
                                        <span className="font-bold">{doctor.expertise_category}</span></p>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
