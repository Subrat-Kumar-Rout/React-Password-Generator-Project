import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom";


function pass(){
    let [password,setpassword] = useState("");
    let [count,setcount] = useState(10);
    let [number,setnumber] = useState("false");
    let [char,setchar] = useState("false");



    return(
        <div>
            <h1>{password}</h1>

            <div>
                
            </div>
        </div>
        

    );
    


}


ReactDOM.craeteRoot(document.getElementById("main")).render(pass);