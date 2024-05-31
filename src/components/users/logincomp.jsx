import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Logincomp({setlogged}){
    
let id = window.location.pathname.replace("/users/edit/", "");
// let id=1;
console.log(id);
const [username,setusername]=useState("");
const [password,setpassword]=useState(0);

const [errmsg,seterrmsg]=useState("");
const [successmsg,setsuccessmsg]=useState("");




const navigate = useNavigate();

const editprocess =()=>{
    set
    let result ={
        "_id": id,
        "username":username,
        "password":password,
    }
    axios.get(`https://projectbackend-rosy.vercel.app/users/readspesific/${result.username}`)
    .then(Response=>{
        console.log(Response.data.data[0]);
        if(Response.data.data.length > 0){
            let result = Response.data.data[0];
            setusername(result.username);
            setpassword(result.password);
 } } )
        }


    return(
        <>
            <h3>Login</h3>
            <div>{errmsg}</div>
        <div>{successmsg}</div>
        <p>Username : <input type="text" placeholder="Username" onChange={(e)=>setusername(e.target.value)}/></p>
        <p>Password : <input type="text" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/></p>
         <p><button onClick={editprocess}>Login</button></p>
        </>
    )
}