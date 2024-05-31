import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Productseditcomp(){
    

// console.log(id)
// console.log(window.location.pathname)
let id = window.location.pathname.replace("/products/edit/", "");
// let id=1;
console.log(id);
const [name,setname]=useState("");
const[prize,setprize]=useState(0);
const [qty,seqty]=useState(0);
const [ctgid,setctgid]=useState("")
const [location,setlocation]=useState("");
const [date,setdate]=useState("");
const [totalsale,settotalsale]=useState(0);
const [vendorid,setvendorid]=useState("")

const [errmsg,seterrmsg]=useState("");
const [successmsg,setsuccessmsg]=useState("");


useEffect(()=>{
    axios.get(`https://projectbackend-rosy.vercel.app/product/readspesific/${id}`)
    .then(Response=>{
        console.log(Response.data.data[0]);
        if(Response.data.data.length > 0){
            let result = Response.data.data[0];
            setname(result.p_name);
            setprize(result.p_prize);
            seqty(result.p_qty);
            setctgid(result.ctg_id);
            setlocation(result.p_location);
            setdate(result.date);
            settotalsale(result.totalsale);
            setvendorid(result.vendor_id);

        }
    })
},[])

const navigate = useNavigate();

const editprocess =()=>{
    let result ={
        "_id": id,
        "p_name":name,
        "p_prize":prize,
        "p_qty":qty,
        "ctg_id":ctgid,
        "p_location":location,
        "date":date,
        "totalsale":totalsale,
        "vendor_id":vendorid
    }

    axios.put("https://projectbackend-rosy.vercel.app/product/update",result)
    .then(Response=>{
        console.log(Response.data);
        if(Response.data.error!="")(seterrmsg(Response.data.error),setsuccessmsg(""))
        else(Response.data.msg!="")
            alert(Response.data.msg);
            navigate("/products");
    })

}


    return(
        <>
            <h3>Edit-Product</h3>
            <div>{errmsg}</div>
        <div>{successmsg}</div>
        <p>product name : <input type="text" placeholder="Enter product name" onChange={(e)=>setname(e.target.value)} value={name}/></p>
        <p>prize : <input type="number" placeholder="Enter prize" onChange={(e)=>setprize(e.target.value)} value={prize}/></p>
        <p>quantity : <input type="number" placeholder="Enter quantity" onChange={(e)=>seqty(e.target.value)} value={qty}/></p>
        <p>catagory ID : <input type="text" placeholder="Enter catagoryId" onChange={(e)=>setctgid(e.target.value)} value={ctgid}/></p>
        <p>Location : <input type="text" placeholder="Enter location" onChange={(e)=>setlocation(e.target.value)} value={location}/></p>
        <p>date : <input type="text" onChange={(e)=>setdate(e.target.value)} value={date} placeholder="date"/></p>
        <p>total sale : <input type="number" placeholder="total sale" onChange={(e)=>settotalsale(e.target.value)} value={totalsale}/></p>
        <p>vendor ID : <input type="text" placeholder="Enter vendorId" onChange={(e)=>setvendorid(e.target.value)} value={vendorid}/></p>
        <p><button onClick={editprocess}>UPDATE</button></p>
        </>
    )
}