import "./About.css";

function About() {

    const socialNetworks = [

        {
            name: "X",
            url: "https://github.com/",
            icon: "",
        },
        {
            name: "Linkedin",
            url: "https://github.com/",
            icon: "",
        },
        {
            name: "Github",
            url: "https://github.com/",
            icon: "",
        },

    ];

    return (

        <>
            <div className="tile">
            <h1>Acerca de mi</h1>
            </div>

            <div className="profile">

            <img src="https://placehold.co/400x400" alt="placeholder" className="profile-img" />
            <p className="profile-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus maiores nostrum aliquam distinctio voluptate expedita sit cumque officiis, deserunt dolorem alias dolor, sint recusandae numquam et dolorum ex assumenda rem.</p>

            </div>

            <div className="container-network">

            {
                socialNetworks.map((netkwork, idx) => (
                    <SocialNetwork name = {netkwork.name} url = {netkwork.url} key = {idx} />
                
                ))
            }

            </div>
        </>

    );
}

function SocialNetwork (network) {

    return (

            <a href={network.url} className = "network"> 
                    {network.name} 
            </a>

        
    )
}

export default About;