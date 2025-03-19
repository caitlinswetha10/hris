import React from "react";
import SingleRecord from "../SingleRecord";
import { useState } from "react";
import { useEffect } from "react";

const Records = () => {
  const people = [
    {
      name: "Dr. Alice Johnson",
      age: 45,
      experience: 20,
      phoneNumber: "123-456-7890",
      position: { college: "Professor" },
    },
    {
      name: "Dr. Bob Smith",
      age: 38,
      experience: 12,
      phoneNumber: "987-654-3210",
      position: { college: "Associate Professor" },
    },
    {
      name: "Dr. Charlie Brown",
      age: 42,
      experience: 15,
      phoneNumber: "456-789-0123",
      position: { college: "Assistant Professor" },
    },
    {
      name: "Dr. David Miller",
      age: 35,
      experience: 10,
      phoneNumber: "321-654-0987",
      position: { college: "Lecturer" },
    },
    {
      name: "Dr. Emily Davis",
      age: 50,
      experience: 25,
      phoneNumber: "654-321-7890",
      position: { college: "Professor" },
    },
    {
      name: "Dr. Frank Wilson",
      age: 47,
      experience: 22,
      phoneNumber: "789-123-4560",
      position: { college: "Professor" },
    },
    {
      name: "Dr. Grace Lee",
      age: 40,
      experience: 18,
      phoneNumber: "852-963-7410",
      position: { college: "Associate Professor" },
    },
    {
      name: "Dr. Henry Thomas",
      age: 36,
      experience: 11,
      phoneNumber: "741-852-9630",
      position: { college: "Assistant Professor" },
    },
    {
      name: "Dr. Irene White",
      age: 44,
      experience: 19,
      phoneNumber: "369-258-1470",
      position: { college: "Associate Professor" },
    },
    {
      name: "Dr. Jack Harris",
      age: 48,
      experience: 24,
      phoneNumber: "147-258-3690",
      position: { college: "Professor" },
    },
    {
      name: "Dr. Karen Martin",
      age: 41,
      experience: 17,
      phoneNumber: "753-159-8420",
      position: { college: "Assistant Professor" },
    },
    {
      name: "Dr. Liam King",
      age: 39,
      experience: 13,
      phoneNumber: "951-357-2640",
      position: { college: "Associate Professor" },
    },
    {
      name: "Dr. Monica Scott",
      age: 46,
      experience: 21,
      phoneNumber: "159-357-4860",
      position: { college: "Professor" },
    },
    {
      name: "Dr. Nathan Young",
      age: 37,
      experience: 12,
      phoneNumber: "684-951-3570",
      position: { college: "Assistant Professor" },
    },
    {
      name: "Dr. Olivia Walker",
      age: 43,
      experience: 16,
      phoneNumber: "258-369-1470",
      position: { college: "Associate Professor" },
    },
    {
      name: "Dr. Peter Robinson",
      age: 49,
      experience: 23,
      phoneNumber: "963-852-7410",
      position: { college: "Professor" },
    },
    {
      name: "Dr. Quinn Carter",
      age: 35,
      experience: 10,
      phoneNumber: "357-951-6840",
      position: { college: "Lecturer" },
    },
    {
      name: "Dr. Rachel Lewis",
      age: 42,
      experience: 15,
      phoneNumber: "147-963-2580",
      position: { college: "Assistant Professor" },
    },
    {
      name: "Dr. Samuel Baker",
      age: 50,
      experience: 26,
      phoneNumber: "321-789-6540",
      position: { college: "Professor" },
    },
    {
      name: "Dr. Tina Green",
      age: 38,
      experience: 14,
      phoneNumber: "852-741-9630",
      position: { college: "Associate Professor" },
    },
    {
      name: "Dr. Ulysses Adams",
      age: 45,
      experience: 20,
      phoneNumber: "963-357-8520",
      position: { college: "Professor" },
    },
    {
      name: "Dr. Victoria Collins",
      age: 39,
      experience: 13,
      phoneNumber: "741-159-3570",
      position: { college: "Assistant Professor" },
    },
    {
      name: "Dr. William Parker",
      age: 41,
      experience: 18,
      phoneNumber: "159-684-9510",
      position: { college: "Associate Professor" },
    },
  ];
  const [search, setSearch] = useState("");
  const [filteredPeople, setFilteredPeople] = useState(people);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  const totalPages = Math.ceil(filteredPeople.length / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const endIndex = startIndex + recordsPerPage;
  const currentRecords = filteredPeople.slice(startIndex, endIndex);
  const applyFilter = (e) => {
    const sortOrder = e.target.value;

    const sortedPeople = [...filteredPeople].sort((a, b) => {
      if (sortOrder === "A-Z") {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === "Z-A") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    setFilteredPeople(sortedPeople);
    setCurrentPage(1)
  };

  const searchFilter = () => {
    if (search.trim() === "") {
      setFilteredPeople(people);
    } else {
      const filteredItems = people.filter(
        (item) =>
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.position.college.toLowerCase().includes(search.toLowerCase()) ||
          item.age.toString().includes(search)
      );
      setFilteredPeople(filteredItems);
      setCurrentPage(1)
    }
  };

  useEffect(() => {
    searchFilter();
  }, [search]);

  return (
    <>
      <div className="record-container">
        <div className="record-filter">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search..."
          />
          <select onClick={(e) => applyFilter(e)}>
            <option value="A-Z">Sort by A-Z</option>
            <option value="Z-A">Sort by Z-A</option>
          </select>
        </div>
        <div className="record-title">
          <b>Name</b>
          <b>Age</b>
          <b>Experience</b>
          <b>Phone Number</b>
          <b>Position</b>
        </div>
        {currentRecords.length > 0 ? (
          currentRecords.map((item, index) => (
            <div key={index} className="record-data">
              <p>{item.name}</p>
              <p>{item.age}</p>
              <p>{item.experience}</p>
              <p>{item.phoneNumber}</p>
              <p>{item.position.college}</p>
            </div>
          ))
        ) : (
          <p>No records found</p>
        )}

        <div className="pagination">
          <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={currentPage === i + 1 ? "active" : ""}
            >
              {i + 1}
            </button>
          ))}
          <button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Records;
