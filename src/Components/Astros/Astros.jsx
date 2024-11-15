import { useEffect, useState } from "react";
import "./Astros.css"


function AstrosCard ({ name, craft}) {

    return (

        <div className="astro-card">

            <p className="astro">El Astronauta "<span className="astro-name">{name}</span>"</p>
            <p className="craft">Esta en la estación espacial "<span className="craft-name">{craft}</span>"</p>

        </div>

    );
}

function Astros() {

    const api_url = "http://api.open-notify.org/astros.json";
    const [astros, setAstros] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            const data = await (fetch(api_url));
            const res = await data.json();
            setAstros(res.people);
        
        }

        fetchData().catch((err) => console.log(err));

    }, []);

    return (

        <div className="astros-container">

            {
                !astros ? ( <p>Loading...</p> ) : (astros.map((astro, idx) => (

                    <AstrosCard key={idx} {...astro} />

                )))
            }

        </div>

    )
}

export default Astros;