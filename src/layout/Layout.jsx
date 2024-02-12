import { Outlet } from "react-router-dom"
import AppHeader from "../components/app-header/AppHeader"
import MainNavs from "../components/main-header/MainNavs"
import Sidebar from "../components/sidebar/Sidebar"
import Bottombar from "../components/bottombar/Bottombar"

const Layout = () => {
  return (
    <div className="layout">
        <AppHeader />
        <MainNavs />

        <div className="main grid grid-cols-[300px_1fr] p-3 bg-[#181818] m-3 rounded-lg md:block">
            <Sidebar />
            <Bottombar />
            <Outlet />

        </div>
    </div>
  )
}

export default Layout