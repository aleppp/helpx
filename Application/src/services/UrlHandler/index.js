import React, { useEffect } from 'react';
import { Redirect, useHistory } from "react-router-dom";

const Urlhandler = () => {
    let history = useHistory();
    useEffect(() => {
        alert("URL is not found, either it is misstyped or URL is not defined yet")
    })
 
    const prevPage = () => {
        history.goBack();
    }
    console.log(history.goBack())
    return(
        <div onLoad={() => prevPage()}>

        </div>
    )
}

export default Urlhandler;