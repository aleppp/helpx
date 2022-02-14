import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({component:Component, ...rest}) => {
    const url = Object.values({ ...rest.location.pathname }).join("");
    const tokenEmail = localStorage.getItem("user_email");
    const isAuthenticated = localStorage.getItem("id_token");
    const [users,setUsers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/user/sel")
        .then((res) => {
            if (res.status === 200) setUsers(res.data[0]);
        })
        .catch((err) => console.log(err));
    }, []);

    const getRole = () => {
        let role = "";
        users.map((user) => {
            if(user.Email === tokenEmail)
                role=user.Name;
        });
        return role;
    }

    const userRole = getRole();
    
    const checkAdmin = () => {
        return (userRole === "System Admin") 
    }

    localStorage.setItem("isAdmin", (checkAdmin() ? "true":"false"))

    //check whether id token is generated or not
    if(!isAuthenticated) {
        return <Redirect to ="/" />
    } else if(url.indexOf("/creator") > -1){
            if(userRole === "Content Contributor") {
                return <Route {...rest} />
            } else {
                return <Redirect push to="/homepage" />
            }
    } else if(url.indexOf("/approver") > -1){
        if(userRole === "Content Approver") {
            return <Route {...rest} />
        } else {
            return <Redirect push to="/homepage" />
        }
    } else if(url.indexOf("/admin") > -1){
        if(userRole === "System Admin") {
            return <Route {...rest} />
        } else {
            return <Redirect push to="/homepage" />
        }
    } else if(url.indexOf("/editor") > -1){
        if(userRole !== "End User" && userRole !== "System Admin") {
            return <Route {...rest} />
        } else {
            return <Redirect push to="/homepage" />
        }
    } else if(url.indexOf("/content") > -1){
        if(userRole === "System Admin") {
            return <Redirect to="/admin/home" />
        } else {
            return <Route {...rest} />
        }
    } else if(url.indexOf("/homepage") > -1) {
        if(userRole === "System Admin") {
            return <Redirect push to= "/admin/home" />
        } else {
            return <Route {...rest} />
        }
    } else {
        return <Route {...rest} />
    }
    
}

export default ProtectedRoute