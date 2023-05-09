import "./app.css"
import React, { useState } from "react";

function App() {
  const WEBURL='sh-mlto.onrender.com'
  const [textinput,setinput]=useState("");

  const changetext=(e:React.ChangeEvent<HTMLInputElement>):void=>{
    setinput(e.target.value);
    (document.getElementById("output") as HTMLElement).innerText="";
  }
  
  const mysubmit=async (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();   
        console.log("clicked");
        
        var fullurl=textinput;
        const weburl=`https://`+WEBURL+`/shrinkit`;
        var data=JSON.stringify({fullurl})
        let obj={
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body:data
        };
        const res=await fetch(weburl,obj);
        const finalurl:string=await res.text();
        setinput("");
        (document.getElementById("output") as HTMLElement).innerText=WEBURL+"/"+finalurl;
        (document.getElementById("output") as HTMLElement).setAttribute("href","https://"+WEBURL+"/"+finalurl);
        console.log("completed");
        
        return;
  }
  
  return (
    <>
  
        <div id="mytitletext">URL SHORTENER</div>
        <form id="formbox">
          <input type="text" id="textinput" placeholder="Enter URL" value={textinput} onInput={changetext} />
          <button id="btn" onClick={mysubmit}>Shrink</button>
        </form>
        <a id="output" target="_blank"></a>
  
    </>
  )
}

export default App
