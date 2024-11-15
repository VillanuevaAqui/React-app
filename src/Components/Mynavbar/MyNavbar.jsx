
import { Link } from "react-router-dom";
import "./MyNavbar.css";

function MyNavbarButtom (props){

    return(

        <Link className="nav-btn" to={props.href}>
            {props.text}
        </Link>
 
    )

}

function MyNavbar ({links}){

    const title = "space-app";

    return (
        
            <nav>
                <div className="title">
                    <h1>{title}</h1>
                </div>

                <div className="container-btn">
                {
                    links.map((link, idx) => (
                        <MyNavbarButtom href={link.href} text={link.text} key={idx} />
                    ))
                }
                </div>

            </nav>
        )   
}

export default MyNavbar;