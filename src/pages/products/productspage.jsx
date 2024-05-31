import {useNavigate} from "react-router-dom"
import Productsviewcomp from "../../components/products/productsviewcomp";
export default function Productspage(){
    const navigate = useNavigate();
return(
    <>
        <h3>Products page</h3>
        <p><button onClick={()=>navigate("/products/add")}>Add Product</button></p>
        < Productsviewcomp />
    </>
)

}