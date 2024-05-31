import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Usereditcomp(){
    
let id = window.location.pathname.replace("/users/edit/", "");
// let id=1;
console.log(id);
const [username,setusername]=useState("");
const [password,setpassword]=useState(0);

const [errmsg,seterrmsg]=useState("");
const [successmsg,setsuccessmsg]=useState("");


useEffect(()=>{
    axios.get(`https://projectbackend-rosy.vercel.app/users/readspesific/${id}`)
    .then(Response=>{
        console.log(Response.data.data[0]);
        if(Response.data.data.length > 0){
            let result = Response.data.data[0];
            setusername(result.username);
            setpassword(result.password);

        }
    })
},[])

const navigate = useNavigate();

const editprocess =()=>{
    let result ={
        "_id": id,
        "username":username,
        "password":password,
    }

    axios.put("https://projectbackend-rosy.vercel.app/users/update",result)
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
            <h3>Edit-user</h3>
            <div>{errmsg}</div>
        <div>{successmsg}</div>
        <p>Username : <input type="text" placeholder="Username" onChange={(e)=>setusername(e.target.value)} value={username}/></p>
        <p>Password : <input type="text" placeholder="password" onChange={(e)=>setpassword(e.target.value)} value={password}/></p>
         <p><button onClick={editprocess}>UPDATE</button></p>
        </>
    )
}