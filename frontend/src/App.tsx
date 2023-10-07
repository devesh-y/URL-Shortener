import "./app.css"
import React, { useState, useTransition } from "react";
import urlRegex from "url-regex";
const Sharelinks = (props: { textoutput: string; }) => {
    const { textoutput } = props;
    return <>
        <div id="sharebutton">
            <a href={"https://api.whatsapp.com/send?text=" + encodeURIComponent(textoutput)} target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 175.216 175.552"><defs><linearGradient id="b" x1="85.915" x2="86.535" y1="32.567" y2="137.092" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#57d163" /><stop offset="1" stop-color="#23b33a" /></linearGradient><filter id="a" width="1.115" height="1.114" x="-.057" y="-.057" color-interpolation-filters="sRGB"><feGaussianBlur stdDeviation="3.531" /></filter></defs><path fill="#b3b3b3" d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0" filter="url(#a)" /><path fill="#fff" d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z" /><path fill="url(#linearGradient1780)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z" /><path fill="url(#b)" d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z" /><path fill="#fff" fill-rule="evenodd" d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647" /></svg>
            </a>
            <a href={`https://t.me/share/url?url=${encodeURIComponent(textoutput)}`} target="_blank">
                <svg id="Livello_1" data-name="Livello 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240"><defs><linearGradient id="linear-gradient" x1="120" y1="240" x2="120" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#1d93d2" /><stop offset="1" stop-color="#38b0e3" /></linearGradient></defs><title>Telegram_logo</title><circle cx="120" cy="120" r="120" fill="url(#linear-gradient)" /><path d="M81.229,128.772l14.237,39.406s1.78,3.687,3.686,3.687,30.255-29.492,30.255-29.492l31.525-60.89L81.737,118.6Z" fill="#c8daea" /><path d="M100.106,138.878l-2.733,29.046s-1.144,8.9,7.754,0,17.415-15.763,17.415-15.763" fill="#a9c6d8" /><path d="M81.486,130.178,52.2,120.636s-3.5-1.42-2.373-4.64c.232-.664.7-1.229,2.1-2.2,6.489-4.523,120.106-45.36,120.106-45.36s3.208-1.081,5.1-.362a2.766,2.766,0,0,1,1.885,2.055,9.357,9.357,0,0,1,.254,2.585c-.009.752-.1,1.449-.169,2.542-.692,11.165-21.4,94.493-21.4,94.493s-1.239,4.876-5.678,5.043A8.13,8.13,0,0,1,146.1,172.5c-8.711-7.493-38.819-27.727-45.472-32.177a1.27,1.27,0,0,1-.546-.9c-.093-.469.417-1.05.417-1.05s52.426-46.6,53.821-51.492c.108-.379-.3-.566-.848-.4-3.482,1.281-63.844,39.4-70.506,43.607A3.21,3.21,0,0,1,81.486,130.178Z" fill="#fff" /></svg>
            </a>
        </div>
    </>
}
const Output = (props: any) => {
    const { textoutput } = props;
    let regex = urlRegex();
    return <>
        {regex.test("https://" + textoutput) ? <>
            <a href={"https://" + textoutput} id="output" target="_blank">{textoutput}</a>
            <Sharelinks textoutput={textoutput} />
        </> :
            <a id="output" >{textoutput}</a>}
    </>
}

function App() {
    const website: string = 'sh-mlto.onrender.com'
    const [textInput, setInput] = useState("");
    const [outputstatus, setoutputstatus] = useState(false);
    const [textoutput, setoutput] = useState("");
    const [isloading,setloading]=useState(false);
    const [_ispending, startTransition] = useTransition();
    const fetchData = async () => {

        const webUrl = `https://` + website + `/shrinkit`;
        let res: Response;
        try {
            res = await fetch(webUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ fullurl: textInput })
            });
        }
        catch (err) {
            setoutput("Request failed: Try Again");
            setoutputstatus(true);
            setloading(false);
            return;
        }
        const finalUrl: string = await (res as Response).text();
        if (finalUrl === "error") {
            setoutput("Error occurred: Try Again");
            setoutputstatus(true);
            setloading(false);
            return;
        }
        setInput("");
        setoutput(website + "/" + finalUrl);
        setoutputstatus(true);
        setloading(false);
    }
    const mySubmit = async (e: React.MouseEvent) => {
        e.preventDefault();
        console.log("clicked");
        const regex = urlRegex();
        if (!regex.test(textInput)) {
            alert("Please enter a valid URL");
            return;
        }
        setloading(true);
        setoutputstatus(false);
        startTransition(() => {
            fetchData();
        })
    };

    return (
        <>
        <p style={{position:"fixed",color:"red",transform:"translate(8px)"}}>Server is deployed on a shared instance. It may take 30s to restart the server</p>
            <p id="mytitletext">URL SHORTENER</p>
            <form id="formbox">
                <input type="text" id="textinput" placeholder="Enter URL" value={textInput} onChange={(e): void => {
                    setInput(e.target.value);
                    setoutputstatus(false);
                }} />
                {isloading ? <p style={{ margin: "auto", width: "fit-content",fontSize:"1.2em",marginTop:"10px"}}>Loading...</p> : <button id="btn" type="submit" onClick={mySubmit}>Shrink</button>}

            </form>

            {outputstatus ? <Output textoutput={textoutput} /> : <></>}

            <div id="links">
                <a href="https://github.com/devesh-y" target="_blank" title="devesh-y-github">
                    <svg id="devesh-y-github" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                        <path d="M12 0a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .8 2.5.6 3.1.4.1-.7.4-1.2.7-1.5-2.6-.3-5.4-1.3-5.4-5.8 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2.9-.3 1.9-.4 2.8-.4s1.9.1 2.8.4c2.3-1.6 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.7.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.5-5.5 5.8.4.4.8 1.1.8 2.2v3.3c0 .4.3.7.8.6A12 12 0 0 0 12 0z" />
                    </svg>
                </a>

                <a href="https://www.linkedin.com/in/devesh-y/" target="_blank" title="devesh-y-linkedin">
                    <svg id="devesh-y-linkedin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#0A66C2">
                        <path d="M20.5 3h-17C2.673 3 2 3.673 2 4.5v17C2 22.327 2.673 23 3.5 23h17c.827 0 1.5-.673 1.5-1.5v-17C22 3.673 21.327 3 20.5 3zM8.681 18.657h-2.88V9.38h2.88v9.277zM7.24 8.69H7.22c-.959 0-1.558-.647-1.558-1.453C5.662 6.773 6.26 6 7.298 6c1.04 0 1.56.773 1.58 1.515c0 .806-.6 1.176-1.62 1.176zM19 18.657h-2.882v-4.856c0-1.186-.426-2-1.494-2c-.816 0-1.304.54-1.512 1.06-.078.194-.097.463-.097.733v5.06H10.22s.038-7.82 0-8.637h2.883v1.226c.387-.6 1.072-1.464 2.607-1.464c1.89 0 3.31 1.226 3.31 3.866V18.656z" />
                    </svg>
                </a>
            </div>
        </>
    )
}

export default App;
