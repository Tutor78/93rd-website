import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

function engineeringPage () {
    return (
        <div className="container">
            <Navbar />
            <div className="contentContainer">
                <h1>Engineering</h1>
                <h2>Our Mission</h2>
                <p>
                    Engineers in the 93rd are tasked with building and maintaining the forward 
                    shell production facility as well as the bunker base used to defend it. 
                    On operation, our Combat Engineers are responsible for digging pits and 
                    defense positions for the Sentinels when necessary. After the Warden army has 
                    gained new territory, our engineers also help to build up the new areas to 
                    protect against Colonial counter attacks.
                </p>
                <Contact />
            </div>
        </div>
    )
};

export default engineeringPage;