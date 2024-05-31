import {useNavigate} from "react-router-dom"
import Vendorview from "../../components/vendors/vendorview";
export default function Vendorpage(){
    const navigate = useNavigate();
return(
    <>
        <h3>vendor page</h3>
        <p><button onClick={()=>navigate("/vendor/add")}>Add vendor</button></p>
        < Vendorview />
    </>
)

}