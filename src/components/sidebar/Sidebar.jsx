/* eslint-disable react/no-unknown-property */
import { Select, Option } from "@material-tailwind/react";
import { FaCheckCircle } from "react-icons/fa";
import { LuFileStack } from "react-icons/lu";



const Sidebar = () => {
  
    return (
      <div className="flex w-72 flex-col gap-6 bg-[#212121] p-3 h-[100vh] rounded-lg md:hidden">
        <h2 className="text-center text-white font-bold p-2 text-[30px]">Filters</h2>
        <div>
          <h3 className="text-white mb-2 ">Industry</h3>
        <Select color="blue" label="Select option" className="bg-[#212121] flex">
          <Option className="flex gap-2 items-center"><LuFileStack className="mr-2 inline" /> Health care.</Option>
          
        </Select>
        <span className="text-[15px] text-[#6B6B6B]">Choose something.</span>
        </div>

        <div>
          <h3 className="text-white mb-2">Market</h3>
        <Select color="blue" label="Select option">
          <Option className="flex gap-2 items-center"><LuFileStack className="mr-2 inline"/> Large-cap</Option>
        </Select>
        <span className="text-[15px] text-[#6B6B6B]">Press Apply to see changes.</span>
        </div>
        <div>
          <h3 className="text-white mb-2">Risk</h3>
        <Select color="blue" label="Select option">
          <Option className="flex gap-2 items-center"><FaCheckCircle className="mr-2 inline"/> low risk</Option>
          <Option className="flex gap-2 items-center"><FaCheckCircle className="mr-2 inline"/> mid risk</Option>
          <Option className="flex gap-2 items-center"> <FaCheckCircle className="mr-2 inline"/> high risk</Option>
          <Option className="flex gap-2 items-center"><FaCheckCircle className="mr-2 inline"/> option text here</Option>
        </Select>
        </div>
      </div>
    );
};

export default Sidebar;
