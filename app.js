import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";


function pass(){
    let [password,setpassword] = useState("");
   



    return(
        <h1>{password}</h1>

    );
    


}


ReactDOM.craeteRoot(document.getElementById("main")).render(pass);