import { useEffect, useState } from "react";
import "./Apod.css"

function ApodCard ({apod}) {


    return(

        <div className="apod-card">

            <h2 className="apod-card-title">{apod.title}</h2>
            <p className="apod-card-date">{apod.date}</p>
            <img src={apod.hdurl} alt={apod.media_type} className="apod-card-img" />
            <p className="apod-card-description">{apod.explanation}</p>
            <p className="apod-card-copy">- {apod.copyright}</p>
            <button onClick={Apod.fetchData}><span className="apod-btn--actualziar">Actualizar</span></button>
            
        </div>

    );
}

function Apod() {

    const api_url = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
    const [apod, setApod] = useState(JSON.parse(localStorage.getItem("apod")));

    const fetchData = async () => {
    
        const data = await (fetch(api_url));
        const res = await data.json();
        setApod(res);
        localStorage.setItem("apod", JSON.stringify(res));
    }

    if (apod == null){

        useEffect(() => {
            
            fetchData().catch((err) => console.log(err));
        
        } , []);
    
        return (
            
            <div className="apod-container">
    
                {
                    !apod ? ( <p> Loaging... </p>) : (<ApodCard key={apod.date} apod = {apod}/>)
                }
                
            </div>
        )

    } else {

        return (

            <div className="apod-container">

                <ApodCard key={apod.date} apod = {apod}/>

            </div>

        )

    }
}

export default Apod;