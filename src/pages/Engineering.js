import Navbar from "../components/Navbar";

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
                <h2>Our Engineers</h2>
                <p>Maybe some info about the members, and leadership</p>
            </div>
        </div>
    )
};

export default engineeringPage;