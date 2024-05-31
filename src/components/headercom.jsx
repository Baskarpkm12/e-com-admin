import {NavLink} from "react-router-dom";
export default function Headercomp({setlogged}) {
    return(
    <>
        <div className="menu">
            <div>
                <h3>LOGO</h3>
            </div>
            <div>
                <nav className="menubar">
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/users">user</NavLink></li>
                        <li><NavLink to="/products">products</NavLink></li>
                        {/* <li><NavLink to="/catagory">catagory</NavLink></li>
                        <li><NavLink to="/vendor">vendor</NavLink></li>
                        <li><NavLink to="/sale">sale</NavLink></li>
                        <li><NavLink to="/payment">payment</NavLink></li> */}
                        <li onClick={()=>{setlogged(null)}}>logout</li>
                    </ul>
                </nav>
            </div>
        </div>


    </>

    )
}