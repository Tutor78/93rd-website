import Navbar from "../components/Navbar";

function engineeringPage () {
    return (
        <div className="container">
            <Navbar />
            <div className="contentContainer">
                <h1>Engineering</h1>
                <h2>Our Mission</h2>
                <p>Info about what our engineers do.</p>
                <h2>Our Engineers</h2>
                <p>Maybe some info about the members, and leadership</p>
            </div>
        </div>
    )
};

export default engineeringPage;