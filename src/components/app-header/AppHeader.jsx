import logo from "./../../../public/logo.png"
import icon from "./../../../public/icon.png"
import wom from "./../../../public/wom.png"
import { IoIosSearch } from "react-icons/io";
import { FaRegArrowAltCircleDown } from "react-icons/fa";




const AppHeader = () => {
  return (
    <div className="app-header p-3">
        <div className="cont w-full px-4">
            <div className="header-content flex items-center gap-6">
                <div className="logo">
                    <img src={logo} alt="logo" className="w-[100px]" />
                </div>
                <div className="main-links bg-[#181818] w-full p-2 rounded-lg flex justify-between items-center">
                    <div className="search relative md:hidden">
                    <IoIosSearch className=" absolute bottom-[20%] text-[20px] ml-[15px] text-[#999]"/>
                        <input type="search" placeholder="search" className="pl-[40px] py-2 outline-none rounded-3xl h-full"/>
                    </div>
                    <div className="info flex items-center gap-3 md:justify-around md:w-full">
                        <img src={icon} alt="icon" />
                        <img src={wom} alt="woman"  className="w-9 h-9 rounded-full"/>
                        <p className="text-[#404040] p-1">Moni Roy <br /> Admin</p>
                        <FaRegArrowAltCircleDown className="text-[#404040]" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AppHeader