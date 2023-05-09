import "./app.css"
import React, { useState } from "react";
function App() {
  const [textinput,setinput]=useState("");

  const changetext=(e:React.ChangeEvent<HTMLInputElement>):void=>{
    setinput(e.target.value);
    (document.getElementById("output") as HTMLElement).innerText="";
  }
  
  const mysubmit=async (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();

        var fullurl=textinput;
        const weburl=`http://localhost:5000/shrinkit`;
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
        (document.getElementById("output") as HTMLElement).innerText=finalurl;
        (document.getElementById("output") as HTMLElement).setAttribute("href",finalurl);

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
