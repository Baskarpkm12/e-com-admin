import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Catagoryeditcomp(){
    

// console.log(id)
// console.log(window.location.pathname)
let id = window.location.pathname.replace("/catagory/edit/", "");
// let id=1;
console.log(id);
const [ctgname,setctgname]=useState("");
const [location,setlocation]=useState("");
const [products,setproducts]=useState(0);

const [errmsg,seterrmsg]=useState("");
const [successmsg,setsuccessmsg]=useState("");


useEffect(()=>{
    axios.get(`https://projectbackend-rosy.vercel.app/catagory/readspesific/${id}`)
    .then(Response=>{
        console.log(Response.data.data[0]);
        if(Response.data.data.length > 0){
            let result = Response.data.data[0];
            setctgname(result.ctg_name);
            setlocation(result.ctg_location);
            setproducts(result.products);

        }
    })
},[])

const navigate = useNavigate();

const editprocess =()=>{
    let result ={
        "_id": id,
        "ctg_name":ctgname,
        "ctg_location":location,
        "products":products,
    }

    axios.put("https://projectbackend-rosy.vercel.app/catagory/update",result)
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
            <h3>Edit-Catagory</h3>
            <div>{errmsg}</div>
        <div>{successmsg}</div>
        <p>Catagory name : <input type="text" placeholder="Enter catagory name" onChange={(e)=>setctgname(e.target.value)} value={ctgname}/></p>
        <p>Location : <input type="text" placeholder="Enter location" onChange={(e)=>setlocation(e.target.value)} value={location}/></p>
        <p>Producs : <input type="number" placeholder="total producs" onChange={(e)=>setproducts(e.target.value)} value={products}/></p>
         <p><button onClick={editprocess}>UPDATE</button></p>
        </>
    )
}