import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
   

export default function Logincomp({setlogged}){
    const navigate = useNavigate();
    
const [username,setusername]=useState("");
const [password,setpassword]=useState(0);

const [errmsg,seterrmsg]=useState("");
const [successmsg,setsuccessmsg]=useState("");

const loginprocess =()=>{
    
    let result ={
        "username":username,
        "password":password,
    }
    axios.get(`https://projectbackend-rosy.vercel.app/users/login/${result.username}`)
    .then(Response=>{
        console.log(Response.data.data[0]);
        if(Response.data.data.length > 0){
            if(Response.data.data[0].password == result.password){
                setlogged(true);
            }
            else{
                seterrmsg("incorrect password!")
                setsuccessmsg('')
            }
            } 
        else{
            setsuccessmsg('please register')
            seterrmsg('')
        }
    })
}
const registerprocess =()=>{
    
    let result ={
        "username":username,
        "password":password,
    }
    axios.get(`https://projectbackend-rosy.vercel.app/users/login/${result.username}`)
    .then(Response=>{
        console.log(Response.data.data[0]);
        if(Response.data.data.length > 0){
            setsuccessmsg('user already existed')
            } 
        else{
            axios.post("https://projectbackend-rosy.vercel.app/users/add",result)
            .then(Response=>{
                console.log(Response.data);
                if(Response.data.error!="")(seterrmsg(Response.data.error),setsuccessmsg(""))
                else(Response.data.msg!="")
                    alert(Response.data.msg);
                    setlogged(true)
            })
            
        }
    })
}


    return(
        <>
        <div className="content">
            <h2>LOGIN</h2>
            <p>{errmsg}{successmsg}</p>
       <input type="text" className="textField" placeholder="Username" onChange={(e)=>setusername(e.target.value)}/>
        <input type="text" className="textField" placeholder="password" onChange={(e)=>setpassword(e.target.value)}/>
       <button className="primaryBtn" onClick={loginprocess}>Login</button>
        <button className="primaryBtn" onClick={registerprocess}>Register</button>
         </div>
        </>
    )
}