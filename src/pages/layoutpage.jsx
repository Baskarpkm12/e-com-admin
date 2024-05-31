import { Outlet } from "react-router-dom";
import Headercomp from "../components/headercom";
import Footercomp from "../components/footercomp";
import { useState } from "react";
import Loginpage from "./users/loginpage";

export default function Layoutpage(){

  const [logged,setlogged]=useState(false);

  if(logged){
    return(
      <>
        <Headercomp setlogged={setlogged}/>
        <Outlet />
        <Footercomp />
      </>
  )
  }

 return(
<>
<Loginpage setlogged={setlogged}/>
</>
 );
}