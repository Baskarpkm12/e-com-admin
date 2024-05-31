import {useNavigate} from "react-router-dom"
import Usersviewcomp from "../../components/users/usersviewc";
export default function Userpage(){
    const navigate = useNavigate();
return(
    <>
        <h3>Users page</h3>
        <p><button onClick={()=>navigate("/Users/add")}>Add user</button></p>
        < Usersviewcomp />
    </>
)

}