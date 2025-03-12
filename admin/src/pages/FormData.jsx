import React, { useState } from "react";

const FormData = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    contact: "",
    email: "",
    address: "",
    employeeId: "",
    department: "",
    jobTitle: "",
    joiningDate: "",
    workLocation: "",
    qualification: "",
    specialization: "",
    university: "",
    experience: "",
    certifications: "",
    profilePicture: null,
    resume: null,
    skills: "",
    languages: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      if (file && (file.type.startsWith("image/") || file.type === "application/pdf") && file.size <= 2 * 1024 * 1024) {
        setFormData({ ...formData, [name]: file });
      } else {
        alert("Invalid file. Please upload an image or PDF (Max: 2MB).");
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Staff Registration Form</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <fieldset className="border p-6 rounded-lg bg-gray-50">
            <legend className="text-lg font-medium mb-2">Personal Information</legend>
            <div className="grid grid-cols-3 gap-4">
              <input type="text" name="fullName" placeholder="Full Name" onChange={handleChange} className="input" required />
              <select name="gender" onChange={handleChange} className="input" required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input type="date" name="dob" onChange={handleChange} className="input" required />
              <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} className="input" required />
              <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="input" required />
            </div>
          </fieldset>

          {/* Job Information */}
          <fieldset className="border p-6 rounded-lg bg-gray-50">
            <legend className="text-lg font-medium mb-2">Job Information</legend>
            <div className="grid grid-cols-3 gap-4">
              <input type="text" name="employeeId" placeholder="Employee ID" onChange={handleChange} className="input" required />
              <select name="department" onChange={handleChange} className="input" required>
                <option value="">Select Department</option>
                <option value="HR">HR</option>
                <option value="IT">IT</option>
                <option value="Finance">Finance</option>
              </select>
              <input type="text" name="jobTitle" placeholder="Job Title" onChange={handleChange} className="input" required />
              <input type="date" name="joiningDate" onChange={handleChange} className="input" required />
              <select name="workLocation" onChange={handleChange} className="input" required>
                <option value="">Select Work Location</option>
                <option value="Campus">Campus</option>
                <option value="Remote">Remote</option>
              </select>
            </div>
          </fieldset>

          {/* Academic & Professional Details */}
          <fieldset className="border p-6 rounded-lg bg-gray-50">
            <legend className="text-lg font-medium mb-2">Academic & Professional Details</legend>
            <div className="grid grid-cols-3 gap-4">
              <input type="text" name="qualification" placeholder="Highest Qualification" onChange={handleChange} className="input" required />
              <input type="text" name="specialization" placeholder="Specialization" onChange={handleChange} className="input" required />
              <input type="text" name="university" placeholder="University Name" onChange={handleChange} className="input" required />
              <input type="number" name="experience" placeholder="Years of Experience" onChange={handleChange} className="input" required />
              <input type="text" name="certifications" placeholder="Certifications" onChange={handleChange} className="input" />
            </div>
          </fieldset>

          {/* Additional Details */}
          <fieldset className="border p-6 rounded-lg bg-gray-50">
            <legend className="text-lg font-medium mb-2">Additional Details</legend>
            <div className="grid grid-cols-3 gap-4">
              <input type="file" name="profilePicture" onChange={handleChange} className="input" />
              <input type="file" name="resume" onChange={handleChange} className="input" />
              <input type="text" name="skills" placeholder="Skills & Expertise" onChange={handleChange} className="input" />
              <input type="text" name="languages" placeholder="Languages Spoken" onChange={handleChange} className="input" />
            </div>
          </fieldset>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormData;