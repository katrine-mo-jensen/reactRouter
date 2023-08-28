import { Outlet } from "react-router-dom";
import { Footer } from "../component/footer/Footer";
import { Navbar } from "../component/navbar/Navbar";

export const MainLayout = () => {
    return (
        <>
        <main>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </main>
        </>
    )
}