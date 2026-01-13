import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";


function Pass(){
    let [password,setpassword] = useState("AAAjosdcpJXPj");
    let [count,setcount] = useState(10);
    let [number,setnumber] = useState(false);
    let [char,setchar] = useState(false);



    return(
        <>
            <h1>{password}</h1>

            <div>
                <input type="range" min={5} max={50}></input>
                <label>Range:{count}</label>

                <input type="radio" defaultValue={number} ></input>
                <label>Number</label>

                <input type="radio" defaultValue={char} ></input>
                <label>Character</label>
            </div>
        </>
        

    );
    


}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Pass/>);
// ReactDOM.createRoot(document.getElementById("main")).render(<pass/>);