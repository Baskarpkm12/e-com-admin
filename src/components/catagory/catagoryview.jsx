import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios";
export default function Catagoryviewcomp(){

    
    const [catagory,setcatagory] = useState([]);
    const navigate =useNavigate();

    // let navigate = useNavigate();
    const fetchdata = () =>{
        axios.get('https://projectbackend-rosy.vercel.app/catagory/read')
        .then (Response =>{
            let result = Response.data
            console.log(result);
            setcatagory(result.data);
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
            axios.delete(`https://projectbackend-rosy.vercel.app/catagory/delete/${e.target.id}`)
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
            <th>catagory_id</th>
            <th>catagory_name</th>
            <th>Location</th>
            <th>Products</th>
            <th colSpan={2}>Actions</th>
        </tr>
        {
            catagory?.map((v,i) => {
                return(
                        <tr key={i} >
                            <td>{v._id}</td>
                            <td>{v.ctg_name}</td>
                            <td>{v.ctg_location}</td>
                            <td>{v.products.length}</td>
                            <td className="edit" onClick={()=>navigate(`/catagory/edit/${v._id}`)}>Edit</td>
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