import React from "react";
import Heading from "../header";
import Base from "../base";
import "./app.scss"
import Pagination from "../pagination";


const App = () => {

    return (
        <div className="own-container mt-4">
           <Heading />
           <Base />
           <Pagination/>
       </div>
    )
}

export default App;