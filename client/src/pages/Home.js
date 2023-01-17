import Navbar from "../components/Navbar"

function homePage () {
    return (
        <div className="container">
        <Navbar />
            <div className="contentContainer">
                <h1>Welcome!</h1>
                <h2>Who we are?</h2>
                <p>
                    A bit of history here.
                </p>
                <h2>What we do?</h2>
                <p>
                    A bit of what we do here.  
                </p>
            </div>
        </div>
    )
};

export default homePage;