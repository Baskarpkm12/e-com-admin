import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Productsaddcomp(){
const [name,setname]=useState("");
const[prize,setprize]=useState(0);
const [qty,seqty]=useState(0);
const [ctgid,setctgid]=useState("")
const [location,setlocation]=useState("");
const [date,setdate]=useState("");
const [totalsale,settotalsale]=useState(0);
const [vendorid,setvendorid]=useState("");
const [file,setfile]=useState();
const[photo,setphoto]=useState("");


const [errmsg,seterrmsg]=useState("");
const [successmsg,setsuccessmsg]=useState("");

const navigate = useNavigate();

const addprocess =async ()=>{
    // let result ={
    //     "p_name":name,
    //     "p_prize":prize,
    //     "p_qty":qty,
    //     "ctg_id":ctgid,
    //     "p_location":location,
    //     "date":date,
    //     "totalsale":totalsale,
    //     "vendor_id":vendorid,
    //     "photo":photo
    // }
    let formData = new FormData();
    formData.append("p_name",name);
    formData.append("p_prize",prize);
    formData.append("p_qty",qty);
    formData.append("ctg_id",ctgid);
    formData.append("p_location",location);
    formData.append("date",date);
    formData.append("totalsale",totalsale);
    formData.append("vendor_id",vendorid);
    formData.append("photo",photo);
    await axios.post("https://projectbackend-rosy.vercel.app/product/add",formData,{
        headers:{'Content-Type': 'multipart/form-data'}
    })
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
        <h3>Add-Product</h3>
        <div>{errmsg}</div>
        <div>{successmsg}</div>
        <p><input type="text" placeholder="Enter product name" onChange={(e)=>setname(e.target.value)}/></p>
        <p><input type="number" placeholder="Enter prize" onChange={(e)=>setprize(e.target.value)}/></p>
        <p><input type="number" placeholder="Enter quantity" onChange={(e)=>seqty(e.target.value)}/></p>
        <p><input type="text" placeholder="Enter catagoryId" onChange={(e)=>setctgid(e.target.value)}/></p>
        <p><input type="text" placeholder="Enter location" onChange={(e)=>setlocation(e.target.value)}/></p>
        <p><input type="text" onChange={(e)=>setdate(e.target.value)} placeholder="date"/></p>
        <p><input type="number" placeholder="total sale" onChange={(e)=>settotalsale(e.target.value)}/></p>
        <p><input type="text" placeholder="Enter vendorId" onChange={(e)=>setvendorid(e.target.value)}/></p>
        <p><input type="file" onChange={(e) => setphoto(e.target.files[0])} placeholder="Select Picture" /></p>
        <p><button onClick={addprocess}>Add-product</button></p>
        </>
    )
}