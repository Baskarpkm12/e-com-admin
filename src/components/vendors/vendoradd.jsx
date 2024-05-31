import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Vendoraddcomp(){
const [vendorname,setvendorname]=useState("");
const [from,setfrom]=useState("");
const [products,setproducts]=useState(0);

const [errmsg,seterrmsg]=useState("");
const [successmsg,setsuccessmsg]=useState("");

const navigate = useNavigate();

const addprocess =()=>{
    let result ={
        "vendor_name":vendorname,
        "vendor_from":from,
        "products":products,
    }

    axios.post("https://projectbackend-rosy.vercel.app/vendor/add",result)
    .then(Response=>{
        console.log(Response.data);
        if(Response.data.error!="")(seterrmsg(Response.data.error),setsuccessmsg(""))
        else(Response.data.msg!="")
            alert(Response.data.msg);
            navigate("/vendor");
    })

}

    return(
        <>
        <h3>Add-vendor</h3>
        <div>{errmsg}</div>
        <div>{successmsg}</div>
        <p><input type="text" placeholder="Enter vendor name" onChange={(e)=>setvendorname(e.target.value)}/></p>
        <p><input type="text" placeholder="Enter from" onChange={(e)=>setfrom(e.target.value)}/></p>
         <p><input type="number" placeholder="total products" onChange={(e)=>setproducts(e.target.value)}/></p>
        <p><button onClick={addprocess}>Add-vendor</button></p>
        </>
    )
}