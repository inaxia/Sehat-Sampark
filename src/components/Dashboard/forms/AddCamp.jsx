import { useEffect, useState } from "react";
import healthcare from '../../../assets/healthcare.svg'
import Button from "../../Button";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const CreateCamp = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedStaffOptions, setSelectedStaffOptions] = useState([]);
  const { register, handleSubmit, watch } = useForm();
  const [doctorsData, setDoctorsData] = useState([]);
  const [staffData, setStaffData] = useState([]);
  const navigate = useNavigate();


  const selectedDate = watch("date");
  const date = new Date(selectedDate);
  const dayOfWeek = date.getDay();
  const daysOfWeek = ["Su", "M", "T", "W", "Th", "F", "S"];
  const dayName = daysOfWeek[dayOfWeek];

  useEffect(() => {
    fetchDoctorsData(dayName);
    console.log(dayName);
  }, [dayName]);

  const fetchDoctorsData = async (dayName) => {
    try {
      const response = await axios.get(
        `https://sehatsampark-backend.onrender.com/get_available_doctors_staff/${dayName}`
      );
      console.log("response", response.data);

      setDoctorsData(response.data?.doctor_data);
      setStaffData(response.data?.staff_data);
    } catch (error) {
      console.error(error);
    }
  };

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
        navigate('/');
      })
      .catch((error) => {
        // Handle error
        console.error("Error:", error);
      });

    // Convert the combined data into an array containing a single element

    console.log("Final complete data: ", finalCampData);
  };

  return (
    <div className="w-full h-full px-5 lg:px-10 py-10 overflow-hidden">
      <div className="border-2 border-primary p-5 rounded-xl">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-28">
          <div className="h-full">
            <img src={healthcare} alt="Healthcare" width={600} height={600} />
          </div>

          <div className="h-screen overflow-scroll">
            <form className="flex flex-col items-center gap-6" onSubmit={handleSubmit(onSubmit)}>
              <h3 className="text-2xl font-extrabold text-black">Create Camp</h3>

              {/* Your form inputs here */}

              {/* Camp Name and Theme */}
              <div className="flex flex-col lg:flex-row items-center gap-3">
                {/* Camp Name */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/2">
                  <label htmlFor="camp_name" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Camp Name</label>
                  <input type="text" id="camp_name" {...register("camp_name")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
                {/* Camp Theme */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/2">
                  <label htmlFor="camp_theme" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Camp Theme</label>
                  <input type="text" id="camp_theme" {...register("camp_theme")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
              </div>

              {/* Camp Category and Disease Focus */}
              <div className="flex flex-col lg:flex-row items-center gap-3">
                {/* Camp Category */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/2">
                  <label htmlFor="camp_category" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Camp Category</label>
                  <input type="text" id="camp_category" {...register("camp_category")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
                {/* Disease Focus */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/2">
                  <label htmlFor="disease_focus" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Disease Focus</label>
                  <input type="text" id="disease_focus" {...register("disease_focus")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
              </div>

              {/* Address, Pincode, Landmark, and Date */}
              <div className="flex flex-col lg:flex-row items-center gap-3">
                {/* Address */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/4">
                  <label htmlFor="complete_address" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Address</label>
                  <input type="text" id="complete_address" {...register("complete_address")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
                {/* Pincode */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/4">
                  <label htmlFor="pincode" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Pincode</label>
                  <input type="number" id="pincode" {...register("pincode")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
                {/* Landmark */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/4">
                  <label htmlFor="landmark" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Landmark</label>
                  <input type="text" id="landmark" {...register("landmark")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
                {/* Date */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/4">
                  <label htmlFor="date" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Date</label>
                  <input type="date" id="date" {...register("date")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
              </div>

              {/* Start Time, End Time, and Awareness Creation */}
              <div className="flex flex-col lg:flex-row items-center gap-3">
                {/* Start Time */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/3">
                  <label htmlFor="start_time" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Start Time</label>
                  <input type="time" id="start_time" {...register("start_time")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
                {/* End Time */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/3">
                  <label htmlFor="end_time" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">End Time</label>
                  <input type="time" id="end_time" {...register("end_time")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
                {/* Awareness Creation */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/3">
                  <label htmlFor="awareness_creation" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Awareness Creation</label>
                  <input type="text" id="awareness_creation" {...register("awareness_creation")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
              </div>

              {/* Minimum and Maximum Age Group */}
              <div className="flex flex-col lg:flex-row items-center gap-3">
                {/* Minimum Age Group */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/2">
                  <label htmlFor="min_age" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Minimum Age Group</label>
                  <input type="number" id="min_age" {...register("min_age")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
                {/* Maximum Age Group */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/2">
                  <label htmlFor="max_age" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Maximum Age Group</label>
                  <input type="number" id="max_age" {...register("max_age")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
              </div>

              {/* Assigned Doctor */}
              <div className="flex flex-col items-start gap-2">
                <label className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Assigned Doctor</label>
                {doctorsData.map((doctor, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={`doctor${index}`}
                      value={doctor.full_name}
                      checked={selectedOptions.includes(doctor.full_name)}
                      onChange={handleCheckboxChange}
                      className="mr-2"
                    />
                    <label htmlFor={`doctor${index}`}>{doctor.full_name}</label>
                  </div>
                ))}
              </div>

              {/* Assigned Staff */}
              <div className="flex flex-col items-start gap-2">
                <label className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Assigned Staff</label>
                {staffData.map((staff, index) => (
                  <div key={index}>
                    <input
                      type="checkbox"
                      id={`staff${index}`}
                      value={staff.full_name}
                      checked={selectedStaffOptions.includes(staff.full_name)}
                      onChange={handleStaffCheckboxChange}
                      className="mr-2"
                    />
                    <label htmlFor={`staff${index}`}>{staff.full_name}</label>
                  </div>
                ))}
              </div>

              {/* Camp Capacity */}
              <div className="flex flex-col items-start gap-2">
                <label htmlFor="camp_capacity" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Camp Capacity</label>
                <input type="number" id="camp_capacity" {...register("camp_capacity")} className="py-2 px-3 border border-primary rounded-md w-full" />
              </div>

              {/* Expertise and Prerequisites */}
              <div className="flex flex-col lg:flex-row items-center gap-3">
                {/* Expertise */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/2">
                  <label htmlFor="expertise" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Expertise</label>
                  <input type="text" id="expertise" {...register("expertise")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
                {/* Prerequisites */}
                <div className="flex flex-col items-start gap-2 w-full lg:w-1/2">
                  <label htmlFor="prerequisites" className="block uppercase tracking-wide text-black text-xs font-semibold mb-1">Prerequisites</label>
                  <input type="text" id="prerequisites" {...register("prerequisites")} className="py-2 px-3 border border-primary rounded-md w-full" />
                </div>
              </div>

              {/* Submit Button */}
              <Button title="Create Camp" className="w-44" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCamp;
