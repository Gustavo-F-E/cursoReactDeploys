import { Outlet } from "react-router-dom";
import {Header} from "../components/Header/Header";
import {Nav} from "../components/Nav/Nav";


export const AdminLayout = () =>{
    return <>
            <Header />
            <Nav />
            <section className="admin-layout">
                <Outlet/>
            </section>
        </>

}
