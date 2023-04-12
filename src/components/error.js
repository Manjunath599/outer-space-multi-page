import React from "react";
import { Link } from "react-router-dom";

export default function Error(){
    return(
        <div className="text-3xl text-center mt-36 font-body py-14">
            <h1 className="mb-10" >No match found in your search.</h1>
            <Link className="border border-black bg-gray-300" to='/'>Back to Home</Link>
        </div>
    )
}