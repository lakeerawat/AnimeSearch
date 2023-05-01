import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import SingleMoviePage from "./SingleMoviePage";

export default function AllRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/:id" element={<SingleMoviePage/>}/>
        </Routes>
    )
}