import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Useraddcomp(){
const [username,setusername]=useState("");
const [password,setpassword]=useState(0);

const [errmsg,seterrmsg]=useState("");
const [successmsg,setsuccessmsg]=useState("");

const navigate = useNavigate();

const addprocess =()=>{
    let result ={
        "username":username,
        "password":password,
    }

    axios.post("https://projectbackend-rosy.vercel.app/users/add",result)
    .then(Response=>{
        console.log(Response.data);
        if(Response.data.error!="")(seterrmsg(Response.data.error),setsuccessmsg(""))
        else(Response.data.msg!="")
            alert(Response.data.msg);
            navigate("/users");
    })

}

    return(
        <>
        <h3>New-User</h3>
        <div>{errmsg}</div>
        <div>{successmsg}</div>
        <p><input type="text" placeholder="Enter username" onChange={(e)=>setusername(e.target.value)}/></p>
         <p><input type="text" placeholder="Enter password" onChange={(e)=>setpassword(e.target.value)}/></p>
        <p><button onClick={addprocess}>Register</button></p>
        </>
    )
}