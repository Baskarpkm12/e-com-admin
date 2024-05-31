import { useEffect, useState } from "react"
import {useNavigate} from "react-router-dom"
import axios from "axios";
export default function Usersviewcomp(){

    
    const [users,setusers] = useState([]);
    const navigate =useNavigate();

    // let navigate = useNavigate();
    const fetchdata = () =>{
        axios.get('https://projectbackend-rosy.vercel.app/users/read')
        .then (Response =>{
            let result = Response.data
            console.log(result);
            setusers(result.data);
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
            axios.delete(`https://projectbackend-rosy.vercel.app/users/delete/${e.target.id}`)
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
            <th>User_id</th>
            <th>Username</th>
            <th>Password</th>
            <th>Cart</th>
            <th colSpan={2}>Actions</th>
        </tr>
        {
            users?.map((v,i) => {
                return(
                        <tr key={i} >
                            <td>{v._id}</td>
                            <td>{v.username}</td>
                            <td>{v.password}</td>
                            <td >{v.cart}</td>
                            <td className="edit" onClick={()=>navigate(`/users/edit/${v._id}`)}>Edit</td>
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