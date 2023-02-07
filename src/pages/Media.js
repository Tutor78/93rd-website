import Navbar from "../components/Navbar";
import Feats from '../components/Feats';

function featsPage () {
    return (
        <div className="container">
            <Navbar />
            <div className="contentContainer">
                <div className="mediaContainer">
                    <h1>Feats and Mighty Deeds</h1>
                    <Feats />
                </div>
                <div className="mediaContainer">
                    <h1>Chronicles of Ash</h1>
                    
                </div>
                {/* <div className="mediaContainer">
                    <h1>Our Youtube</h1>
                    <Feats />
                </div> */}
            </div>
        </div>
    )
};

export default featsPage;