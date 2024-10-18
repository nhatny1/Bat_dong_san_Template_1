"use client";
import { useState } from "react";

export default function Single() {
  const [openSection, setOpenSection] = useState(null);
  const [hoveredNumber, setHoveredNumber] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const locations = [
    {
      id: 1,
      name: "Shopping Center",
      description:
        "Lorem ipsum dolor sit amet, atomorum posidonium est ad. Id vim errem",
    },
    {
      id: 2,
      name: "Central Park",
      description:
        "Lorem ipsum dolor sit amet, atomorum posidonium est ad. Id vim errem",
    },
    {
      id: 3,
      name: "Hospital",
      description:
        "Lorem ipsum dolor sit amet, atomorum posidonium est ad. Id vim errem",
    },
    {
      id: 4,
      name: "Restaurants",
      description:
        "Lorem ipsum dolor sit amet, atomorum posidonium est ad. Id vim errem",
    },
    {
      id: 5,
      name: "Play grounds",
      description:
        "Lorem ipsum dolor sit amet, atomorum posidonium est ad. Id vim errem",
    },
    {
      id: 6,
      name: "Bus Stand",
      description:
        "Lorem ipsum dolor sit amet, atomorum posidonium est ad. Id vim errem",
    },
  ];

  const hoverText = [
    { id: 1, text: "Central Park 1.5km" },
    { id: 2, text: "Central Park 1.5km" },
    { id: 3, text: "Central Park 1.5km" },
    { id: 4, text: "Central Park 1.5km" },
  ];

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="flex space-x-12">
        <div className="bg-bg-custom text-white p-4 w-72 py-20">
          {locations.map((location, idx) => (
            <div key={location.id}>
              <div
                className="flex justify-between items-center cursor-pointer py-2"
                onClick={() => toggleSection(location.id)}>
                <span
                  className={`${
                    openSection === location.id ? "text-yellow-600" : ""
                  }`}>
                  {location.name}
                </span>
                <span>{openSection === location.id ? "-" : "+"}</span>
              </div>
              {openSection === location.id && location.description && (
                <div className="text-sm text-gray-400 pl-4">
                  {location.description}
                </div>
              )}
              {idx < locations.length - 1 && (
                <hr className="border-gray-700 my-2" />
              )}
            </div>
          ))}
        </div>

        <div className="relative w-96 h-96">
          {hoverText.map((hoverItem) => (
            <div
              key={hoverItem.id}
              className="absolute text-gray-500 text-xl cursor-pointer"
              style={{
                top: `${hoverItem.id * 20}%`,
                left: `${hoverItem.id * 20}%`,
              }}
              onMouseEnter={() => setHoveredNumber(hoverItem.id)}
              onMouseLeave={() => setHoveredNumber(null)}>
              {`0${hoverItem.id}`}
              {hoveredNumber === hoverItem.id && (
                <div className="absolute top-8 left-0 bg-gray-800 text-white p-2 rounded-md">
                  {hoverItem.text}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
