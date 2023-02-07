import Navbar from "../components/Navbar";
import Contact from "../components/Contact";

function logisticsPage () {
    return (
        <div className="container">
            <Navbar />
            <div className="contentContainer" style={{ justifyContent: "center" }}>
                <h1>Logistics</h1>
                <h2>Our Mission</h2>
                <p>
                    As for any regiment, logistics specialists are a core part
                    of the 93rd Artillery Regiment. They are soldies and artillerymen
                    dedicated to producing the guns, ammo, and any additional equipment
                    needed by the regiment. On operation, our logistics specialists
                    are tasked with hauling shells from our shell facility or closest
                    storage to the guns, allowing a continous barrage to rain down on top
                    of our enemies. Logistics specialists of the 93rd have a history of 
                    performing above and beyond the needs of the regiment, often managing to
                    produce enough shells for an operation in under a day. They also regularly
                    assist other regiments within our coalition as well as around the front that
                    the 93rd operates in.
                </p>
                <Contact />
            </div>
        </div>
    )
};

export default logisticsPage;