import Footer from "Components/Footer"
import Header from "Components/Header/Header"
import NuevoVideo from "pages/NuevoVideo"

const { default: Inicio } = require("pages/Inicio")
const { BrowserRouter, Routes, Route } = require("react-router-dom")

function AppRoutes(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Inicio/>}></Route>
                <Route path="/NuevoVideo" element={<NuevoVideo/>}></Route>
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes