/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import healthcare from '../../../assets/healthcare.svg'
import Button from "../../Button";
import { useForm } from "react-hook-form";
import axios from "axios";
const DoctorForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm();

  const days = [
    { label: "S" },
    { label: "M" },
    { label: "Tu" },
    { label: "W" },
    { label: "Th" },
    { label: "F" },
    { label: "Sat" },
  ];

  const onSubmit = async (data) => {
    axios
      .post("https://sehatsampark-backend.onrender.com/create_staff", data)
      .then((response) => {
        // Handle success
        console.log("Response:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });

    // Convert the combined data into an array containing a single element

    console.log("Final complete data: ", data);
  };

  return (
    <div className="w-full  px-5 lg:px-10 py-10">
      <div className="border-2 border-secondary p-5 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-28">
          <img src={healthcare} width={600} height={600} />

          <form
            className="flex flex-col items-center gap-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3>Create Staff</h3>

            <div className="mt-5 flex flex-col items-start gap-3">
              <div className="flex flex-col lg:flex-row items-start gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John"
                    {...register("full_name")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Expertise Category
                  </label>
                  <input
                    type="text"
                    placeholder="build"
                    {...register("expertise_category")}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    placeholder="6"
                    {...register("years_of_experience")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Designation
                  </label>
                  <input
                    type="text"
                    placeholder="Phlebotomist"
                    {...register("designation")}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-3 w-full">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    className="w-full"
                    placeholder="+91999999999"
                    {...register("phone_number")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    placeholder="12"
                    className="w-full"
                    {...register("age")}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-3 w-full">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full"
                    placeholder="john@gmail.com"
                    {...register("email")}
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-2">
                <label
                  className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                  htmlFor="grid-first-name"
                >
                  Unavailable Days
                </label>
                <div>
                  {days.map((day, index) => {
                    return (
                      <div key={index} className="flex items-center gap-2">
                        <input
                          id={`option${index}`}
                          type="checkbox"
                          value={day.label}
                          {...register("unavailable_days")}
                        />
                        <label htmlFor={`option${index}`}>{day.label}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <Button title="Create Staff" className="w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoctorForm;
