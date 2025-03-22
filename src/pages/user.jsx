import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default  function User(){
    const {id} = useParams()
    return(
        <>
            <div className="text-3xl bg-gray-700 text-white text-center p-5">Why do you write "{id}"</div>
        </>
    )
}