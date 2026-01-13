import React,{useState,useEffect, useCallback} from "react";
import ReactDOM from "react-dom/client";


function Pass(){
    let [password,setpassword] = useState("");
    let [count,setcount] = useState(10);
    let [number,setnumber] = useState(false);
    let [char,setchar] = useState(false);




     const updatepass = useCallback(()=>{
        let chare = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(number){
            chare += "1234567890"
        }
        if(char){
            chare += "!@#$%^&*()+=~`"
        }
        
        let res = "";

        for(let i=0;i<count;i++){
            res += chare[Math.floor(Math.random()*chare.length)]
        }

        setpassword(res);
    },[count,number,char]);
    

    
    useEffect(()=>
        updatepass()
        ,[updatepass])



    return(
        <>
            <h1>{password}</h1>

            <div>
                <input type="range" min={5} max={20} onChange={(e)=>setcount(Number(e.target.value))}></input>
                <label>Range:{count}</label>

                <input type="checkbox" defaultChecked={number} onChange={()=>setnumber(!number)}></input>
                <label>Number</label>

                <input type="checkbox" defaultChecked={char} onChange={()=>setchar(!char)}></input>
                <label>Character</label>
            </div>
        </>
        

    );
    


}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Pass/>);
// ReactDOM.createRoot(document.getElementById("main")).render(<pass/>);