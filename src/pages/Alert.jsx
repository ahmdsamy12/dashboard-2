import { FaDollarSign } from "react-icons/fa";
import { ImFileText2 } from "react-icons/im";
import { FaChartBar } from "react-icons/fa";
import { TbWorldDollar } from "react-icons/tb";
import { alerts } from "../constants";



const Alert = () => {
  return (
    <div className="alert bg-[#212121]">
        <div className="alert-content p-2">
            <div className="alert-icons border-2 border-[#6B6B6B] rounded-lg p-2 bg-gradient-to-r from-[#d5d5d512]  to-[#667eea42]">
                <div className="icons flex items-center flex-wrap justify-around text-white p-5 ">
                    <p className="flex items-center p-2 gap-2"><FaDollarSign className="text-[30px]"/> $TSLA</p>
                    <span className=" ss:hidden">|</span>
                    <p className="flex p-2 items-center ml-2 gap-2"><ImFileText2 className="text-[30px]"/> 200 Contracts</p>
                    <span className=" ss:hidden">|</span>
                    <p className="flex items-center ml-2 gap-2"><FaChartBar className="text-[30px]"/> 12.2%</p>
                    <span className=" ss:hidden">|</span>
                    <p className="flex p-2 ml-2 items-center gap-2"><TbWorldDollar className="text-[30px]"/> High risk</p>
                </div>
                <p className="text-white pl-6">Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%.</p>
            </div>
            <div className="alert-info mt-2">
                {alerts.map((alert, i) => (
                    <p key={i} className="p-3 text-white bg-[#181818] rounded-lg mb-2">{alert.alert}</p>
                ) )}
            </div>
        </div>
    </div>
  )
}

export default Alert