import Navbar from "../components/Navbar";
import Feats from '../components/Feats';
import Contact from "../components/Contact";

function featsPage () {
    return (
        <div className="container">
        <Navbar />
            <div className="contentContainer">
                <h1>Feats and Mighty Deeds</h1>
                <Feats />
            </div>
            <Contact />
        </div>
    )
};

export default featsPage;