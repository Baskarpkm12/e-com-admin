import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios";
export default function Vendorview(){

    
    const [vendor,setvendor] = useState([]);
    const navigate =useNavigate();

    // let navigate = useNavigate();
    const fetchdata = () =>{
        axios.get('https://projectbackend-rosy.vercel.app/vendor/read')
        .then (Response =>{
            let result = Response.data
            console.log(result);
            setvendor(result.data);
        })
    }

    useEffect(()=>{
        fetchdata();
    },[])
    const deleteprocess =(e)=>{
        console.log(e);
        console.log(e.target.id);
        let conf = confirm('Are you delete this field');
        if(conf){
            axios.delete(`https://projectbackend-rosy.vercel.app/vendor/delete/${e.target.id}`)
            .then(response=>{
                if(response.data.msg!=""){
                    alert(response.data.msg);
                    fetchdata();
                }
            })
        }
    }

    return(
        <>
        <table className="table">
        <tbody>
        <tr className="head">
            <th>vendor_id</th>
            <th>vendor_name</th>
            <th>From</th>
            <th>Transport</th>
            <th>Products</th>
            <th colSpan={2}>Actions</th>
        </tr>
        {
            vendor?.map((v,i) => {
                return(
                        <tr key={i} >
                            <td>{v._id}</td>
                            <td>{v.vendor_name}</td>
                            <td>{v.vendor_from}</td>
                            <td>{v.transport}</td>
                            <td>{v.products}</td>
                            <td className="edit" onClick={()=>navigate(`/vendor/edit/${v._id}`)}>Edit</td>
                            <td className="delete" id={v._id} onClick={deleteprocess}>Delete</td>
                        </tr>
                )
            })
        
        }
        </tbody>
</table>
        </>
    )
}