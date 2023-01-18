import Navbar from "../components/Navbar";
import Feats from '../components/Feats';

function featsPage () {
    return (
        <div className="container">
        <Navbar />
            <div className="contentContainer">
                <h1>Feats and Mighty Deeds</h1>
                {/* <Feats /> */}
            </div>
        </div>
    )
};

export default featsPage;