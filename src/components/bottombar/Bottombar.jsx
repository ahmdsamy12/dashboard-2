import { Select, Option } from "@material-tailwind/react";
import { FaCheckCircle } from "react-icons/fa";
import { LuFileStack } from "react-icons/lu";

const Bottombar = () => {
    return (
        <div className=" hidden md:block">

        <div className="flex flex-row flex-wrap gap-6 bg-[#212121] rounded-lg md:p-2 md:justify-center">
          
          <div>
           
          <Select color="blue" label="Select option" className="bg-[#212121] flex">
            <Option className="flex gap-2 items-center"><LuFileStack className="mr-2 inline" /> Health care.</Option>
            
          </Select>

          </div>
  
          <div>
           
          <Select color="blue" label="Select option">
            <Option className="flex gap-2 items-center"><LuFileStack className="mr-2 inline"/> Large-cap</Option>
          </Select>

          </div>
          <div>
        
          <Select color="blue" label="Select option">
            <Option className="flex gap-2 items-center"><FaCheckCircle className="mr-2 inline"/> low risk</Option>
            <Option className="flex gap-2 items-center"><FaCheckCircle className="mr-2 inline"/> mid risk</Option>
            <Option className="flex gap-2 items-center"> <FaCheckCircle className="mr-2 inline"/> high risk</Option>
            <Option className="flex gap-2 items-center"><FaCheckCircle className="mr-2 inline"/> option text here</Option>
          </Select>
          </div>
        </div>
        </div>
      );
}

export default Bottombar