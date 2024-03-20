import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../components/home/Home";
import UserCurd from "../components/user/UserCrud";

export default props=>
    <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/users" element={<UserCurd/>}/>
        <Route exact path="*" element={<Home/>}/>
    </Routes>