/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import healthcare from '../../../assets/healthcare.svg'
import Button from "../../Button";
import { useForm } from "react-hook-form";
import axios from "axios";
const CreateCamp = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedStaffOptions, setSelectedStaffOptions] = useState([]);
  const { register, handleSubmit, setValue, watch } = useForm();
  const [doctorsData, setDoctorsData] = useState([]);
  const [staffData, setStaffData] = useState([]);

  const selectedDate = watch("date");
  const date = new Date(selectedDate);
  const dayOfWeek = date.getDay();
  const daysOfWeek = ["Su", "M", "T", "W", "Th", "F", "S"];
  const dayName = daysOfWeek[dayOfWeek];

  useEffect(() => {
    fetchDoctorsData(dayName);
    console.log(dayName);
  }, [dayName]);

  console.log("Selected Doctors", selectedOptions);
  const fetchDoctorsData = async (dayName) => {
    try {
      const response = await axios.get(
        `https://sehatsampark-backend.onrender.com/get_available_doctors_staff/${dayName}`
      );
      console.log("response", response.data);

      setDoctorsData(response.data?.doctor_data);
      setStaffData(response.data?.staff_data);
      const limitedDocData = {
        full_name: doctorsData?.full_name,
        meet_link: doctorsData?.meet_link,
        slot: doctorsData?.slot,
      };

      console.log(limitedDocData);
      // Assuming doctors data is in response.data.doctors and staff data is in response.data.staff
      // Set the state variables accordingly
    } catch (error) {
      console.error(error);
    }
  };

  const limitedDocData = {
    full_name: doctorsData?.full_name,
    meet_link: doctorsData?.meet_link,
    slot: doctorsData?.slot,
  };

  console.log(limitedDocData);
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };
  const handleStaffCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedStaffOptions([...selectedStaffOptions, value]);
    } else {
      setSelectedStaffOptions(
        selectedStaffOptions.filter((option) => option !== value)
      );
    }
  };
  const onSubmit = async (data) => {
    const ad = selectedOptions.map((c, i) => {
      doctorsData.forEach(() => {});
    });

    // Combine form data and additional data into a single object
    const finalCampData = {
      age_group: {
        max_age: Number(data.max_age),
        min_age: Number(data.min_age),
      },
      assigned_doctors: selectedOptions,
      assigned_nurses: selectedStaffOptions,
      awareness_creation: data.awareness_creation,
      camp_capacity: data.camp_capacity,
      camp_category: data.camp_category,
      camp_name: data.camp_name,
      camp_theme: data.camp_theme,
      date: data.date,
      disease_focus: data.disease_focus,
      expertise: data.expertise,
      prerequisites: data.prerequisites,
      time_period: {
        start_time: data.start_time,
        end_time: data.end_time,
      },
      venue: {
        complete_address: data.complete_address,
        landmark: data.landmark,
        pincode: data.pincode,
      },
    };

    axios
      .post(
        "https://sehatsampark-backend.onrender.com/create_camps",
        finalCampData
      )
      .then((response) => {
        // Handle success
        console.log("Response:", response.data);
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });

    // Convert the combined data into an array containing a single element

    console.log("Final complete data: ", finalCampData);
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
            <h3>Create Camp</h3>

            <div className="mt-5 flex flex-col items-center gap-3">
              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Camp Name
                  </label>
                  <input
                    type="text"
                    placeholder="build"
                    {...register("camp_name")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Camp Theme
                  </label>
                  <input
                    type="text"
                    placeholder="build"
                    {...register("camp_theme")}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Camp Category
                  </label>
                  <input
                    type="text"
                    placeholder="build"
                    {...register("camp_category")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Disease Focus
                  </label>
                  <input
                    type="text"
                    placeholder="build"
                    {...register("disease_focus")}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Adddress
                  </label>
                  <input
                    type="text"
                    placeholder="build"
                    {...register("complete_address")}
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Pincode
                  </label>
                  <input
                    type="number"
                    placeholder="build"
                    {...register("pincode")}
                  />
                </div>{" "}
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Landmark
                  </label>
                  <input
                    type="text"
                    placeholder="build"
                    {...register("landmark")}
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    placeholder="build"
                    {...register("date")}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Start Time
                  </label>
                  <input
                    type="time"
                    placeholder="build"
                    {...register("start_time")}
                  />
                </div>
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    End Time
                  </label>
                  <input
                    type="time"
                    placeholder="build"
                    {...register("end_time")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Awareness Creation
                  </label>
                  <input
                    type="text"
                    placeholder="build"
                    {...register("awareness_creation")}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Minimum Age Group
                  </label>
                  <input
                    type="number"
                    placeholder="build"
                    {...register("min_age")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Maximum Age Group
                  </label>
                  <input
                    type="number"
                    placeholder="build"
                    {...register("max_age")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Assigned Doctor
                  </label>
                </div>
                <div>
                  {doctorsData.map((doctor, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={`option${index}`}
                        value={doctor.full_name}
                        checked={selectedOptions.includes(doctor.full_name)}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor={`option${index}`}>
                        {doctor.full_name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Assigned Staff
                  </label>
                </div>
                <div>
                  {staffData.map((option, index) => (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id={`option${index}`}
                        value={option.full_name}
                        checked={selectedStaffOptions.includes(
                          option.full_name
                        )}
                        onChange={handleStaffCheckboxChange}
                      />
                      <label htmlFor={`option${index}`}>
                        {option.full_name}{" "}
                      </label>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Camp Capacity
                  </label>
                  <input
                    type="number"
                    placeholder="build"
                    {...register("camp_capacity")}
                  />
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center gap-3">
                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Expertise
                  </label>
                  <input
                    type="text"
                    placeholder="build"
                    {...register("expertise")}
                  />
                </div>

                <div className="flex flex-col items-start gap-2">
                  <label
                    className="block uppercase tracking-wide text-primary text-xs font-bold mb-2"
                    htmlFor="grid-first-name"
                  >
                    Prerequisites
                  </label>
                  <input
                    type="text"
                    placeholder="build"
                    {...register("prerequisites")}
                  />
                </div>
              </div>
            </div>

            <Button title="Create Camp" className="w-full" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateCamp;
