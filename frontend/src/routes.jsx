import { BrowserRouter, Routes, Route} from "react-router";

import Login from "./pages/Login/Login"
import Cadastro from "./pages/Cadastro/Cadastro"
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin"
import Admin from "./pages/Admin/Admin"

export default function Navegacao() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Cadastro" element={<Cadastro/>}/>
                <Route path="/Admin" element={<LoginAdmin/>} />
                <Route path="/Admin/Home" element={<Admin/>} />
            </Routes>
        </BrowserRouter>
    )
}