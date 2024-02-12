import { NavLink } from "react-router-dom"

const MainNavs = () => {
  return (
    <div className="main-navs p-3 bg-[#181818] m-3 rounded-lg">
        <ul className="m-0 flex items-center justify-around gap-5 w-full flex-wrap">
            <li className="flex flex-col justify-center items-center ">
                <span className="block  w-fit bg-[#9089DC] text-white text-[10px] p-[2px] rounded-lg">coming soon</span>
                <NavLink to="/trad" className="text-[30px] font-bold text-[#404040]">Trading</NavLink>
            </li>
            <span className="mt-[15px] ss:hidden text-white">|</span>
            <li className="flex flex-col justify-center items-center ">
                <span className="block w-fit  bg-[#9089DC] text-white text-[10px] p-[2px] rounded-lg">coming soon</span>
                <NavLink to="/auto" className="text-[30px] font-bold text-[#404040]">Automation</NavLink>
            </li>
            <span className="mt-[15px] ss:hidden text-white">|</span>
            
             <li className="flex flex-col justify-center items-center ">
                <span className="block w-fit bg-[#9089DC] text-white text-[10px] p-[2px] rounded-lg">coming soon</span>
                <NavLink to="/porto" className="text-[30px] font-bold text-[#404040]">Portfolio</NavLink>
            </li>
            <span className="mt-[15px] ss:hidden text-white">|</span>

            <li className="mt-[10px]">
            <NavLink to="/alert" className="text-[30px] font-bold text-[#404040] active:text-white">Alerts</NavLink>
            
            </li>

            <span className="mt-[15px] ss:hidden  text-white">|</span>

            <li className="mt-[10px]">
            <NavLink to="/train" className="text-[30px] font-bold text-[#404040]">Training</NavLink>
                
            </li>
        </ul>
    </div>
  )
}

export default MainNavs