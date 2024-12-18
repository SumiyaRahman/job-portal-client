import React from "react";
import { FaDollarSign } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const HotJobsCard = ({ job }) => {
  const {
    title,
    company,
    company_logo,
    requirements,
    description,
    location,
    salaryRange,
  } = job;
  return (
    <div className="card card-compact bg-[#08322f] bg-opacity-5">
      <div className="flex items-center gap-2 m-2">
        <figure>
          <img className="w-[52px]" src={company_logo} alt="company logo" />
        </figure>
        <div>
          <h2 className="font-bold text-xl text-gray-700">{company}</h2>
          <p className="flex gap-1 items-center text-sm text-gray-500">
            <span>
              <IoLocationOutline></IoLocationOutline>
            </span>
            <span>{location}</span>
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title text-xl font-semibold text-gray-600">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
            {
                requirements.map(skill => <span className="bg-[#08322f] text-center py-1 px-3 rounded text-xs font-bold text-[#ffdd00] cursor-pointer">{skill}</span>)
            }
        </div>
        <div className="card-actions justify-end items-center mt-4">
            <p className="flex items-center text-lg">
                <FaDollarSign></FaDollarSign>
                {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
            </p>
          <button className="bg-[#ffdd00] text-[#08322f] px-5 py-1 font-bold text-base rounded">Apply</button>
        </div>
      </div>
    </div>
  );
};

export default HotJobsCard;
