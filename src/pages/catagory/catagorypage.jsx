import {useNavigate} from "react-router-dom"
import Catagoryviewcomp from "../../components/catagory/catagoryview";
export default function Catagorypage(){
    const navigate = useNavigate();
return(
    <>
        <h3>Catagory page</h3>
        <p><button onClick={()=>navigate("/catagory/add")}>Add Catagory</button></p>
        < Catagoryviewcomp />
    </>
)

}