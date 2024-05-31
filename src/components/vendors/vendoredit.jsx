import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Vendoreditcomp(){
    

// console.log(id)
// console.log(window.location.pathname)
let id = window.location.pathname.replace("/vendor/edit/", "");
// let id=1;
console.log(id);
const [vendorname,setvendorname]=useState("");
const [from,setfrom]=useState("");
const [products,setproducts]=useState(0);

const [errmsg,seterrmsg]=useState("");
const [successmsg,setsuccessmsg]=useState("");


useEffect(()=>{
    axios.get(`https://projectbackend-rosy.vercel.app/vendor/readspesific/${id}`)
    .then(Response=>{
        console.log(Response.data.data[0]);
        if(Response.data.data.length > 0){
            let result = Response.data.data[0];
            setvendorname(result.vendor_name);
            setfrom(result.vendor_from);
            setproducts(result.products);

        }
    })
},[])

const navigate = useNavigate();

const editprocess =()=>{
    let result ={
        "_id": id,
        "vendor_name":vendorname,
        "vendor_from":from,
        "products":products,
    }

    axios.put("https://projectbackend-rosy.vercel.app/vendor/update",result)
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
            <h3>Edit-vendor</h3>
            <div>{errmsg}</div>
        <div>{successmsg}</div>
        <p>vendor name : <input type="text" placeholder="Enter vendor name" onChange={(e)=>setvendorname(e.target.value)} value={vendorname}/></p>
        <p>from : <input type="text" placeholder="Enter from" onChange={(e)=>setfrom(e.target.value)} value={from}/></p>
        <p>Producs : <input type="number" placeholder="total producs" onChange={(e)=>setproducts(e.target.value)} value={products}/></p>
         <p><button onClick={editprocess}>UPDATE</button></p>
        </>
    )
}