import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Catagoryaddcomp(){
const [ctgname,setctgname]=useState("");
const [location,setlocation]=useState("");
const [products,setproducts]=useState(0);

const [errmsg,seterrmsg]=useState("");
const [successmsg,setsuccessmsg]=useState("");

const navigate = useNavigate();

const addprocess =()=>{
    let result ={
        "ctg_name":ctgname,
        "ctg_location":location,
        "products":products,
    }

    axios.post("https://projectbackend-rosy.vercel.app/catagory/add",result)
    .then(Response=>{
        console.log(Response.data);
        if(Response.data.error!="")(seterrmsg(Response.data.error),setsuccessmsg(""))
        else(Response.data.msg!="")
            alert(Response.data.msg);
            navigate("/catagory");
    })

}

    return(
        <>
        <h3>Add-Ctagory</h3>
        <div>{errmsg}</div>
        <div>{successmsg}</div>
        <p><input type="text" placeholder="Enter catagory name" onChange={(e)=>setctgname(e.target.value)}/></p>
        <p><input type="text" placeholder="Enter location" onChange={(e)=>setlocation(e.target.value)}/></p>
        <p><button onClick={addprocess}>Add-Catagory</button></p>
        </>
    )
}