import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios";
export default function Productsviewcomp(){

    
    const [products,setproducts] = useState([]);
    const navigate =useNavigate();

    // let navigate = useNavigate();
    const fetchdata = () =>{
        axios.get('https://projectbackend-rosy.vercel.app/product/read')
        .then (Response =>{
            let result = Response.data
            console.log(result);
            setproducts(result.data);
        })
    }

    useEffect(()=>{
        fetchdata();

        axios.get(`https://projectbackend-rosy.vercel.app/product/readspesific/65aa50e47f996803a32686a8`)
            .then(res => console.log(res.data, "dafaf"));
    },[])
    const deleteprocess =(e)=>{
        console.log(e);
        console.log(e.target.id);
        let conf = confirm('Are you delete this field');
        if(conf){
            axios.delete(`https://projectbackend-rosy.vercel.app/product/delete/${e.target.id}`)
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
            <th>Products_id</th>
            <th>Product_name</th>
            <th>Prize</th>
            <th>Quantity</th>
            <th>CatagoryID</th>
            <th>Location</th>
            <th>photo</th>
            <th>Total_selling</th>
            <th>Vendor_ID</th>
            <th colSpan={2}>Actions</th>
        </tr>
        {
            products?.map((v,i) => {
                return(
                        <tr key={i} >
                            <td>{v._id}</td>
                            <td>{v.p_name}</td>
                            <td>{v.p_prize}</td>
                            <td>{v.p_qty}</td>
                            <td>{v.ctg_id}</td>
                            <td>{v.p_location}</td>
                            <td>
                                    <img src={v.photo} width={100} alt={v.photo}/>
                            </td>
                            <td>{v.totalsale}</td>
                            <td>{v.vendor_id}</td>
                            <td className="edit" onClick={()=>navigate(`/products/edit/${v._id}`)}>Edit</td>
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