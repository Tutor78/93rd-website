import Navbar from "../components/Navbar"

function homePage () {
    return (
        <div className="container">
        <Navbar />
            <div className="contentContainer">
                <h1>Welcome!</h1>
                <h2>Who Are We?</h2>
                <p>
                    Since it's founding during War 87, the 93rd Artillery Regiment [93ART] has
                    been dedicated to pushing the boundaries of what can be achieved with artillery
                    in Foxhole. From the shores of Fisherman's Row to the bridges of Godscroft, our
                    fire rain and steel hail push back the southern invaders on all fronts, burything
                    them underneath our fury. Through constant, training, dedication, and discipline,
                    the 93ART has become the biggest and most proficient specialised artillery Regiment
                    in all of Caoiva.
                </p>
                <h2>What Do We Do?</h2>
                <p>
                    In the 93rd Artillery Regiment, we decided to take artillery a step further and it is
                    reflected in our motto "We succeed where others don't dare." Through training, discipline,
                    and coordination, we are able to achieve feats that most other artillery crews would find
                    too risky. With our many allies and our coalition, the Caoivish Specialist Union [CSU], we 
                    embark on many combined arms operations which requires the best of what every participant
                    can give to succeed.
                </p>
                <p>
                    Our approach of artillery could be described with: 
                    <ul>
                        <li>
                            Our mobile style of artillery achieved through training aimed at 
                            improving the reactivity and coordination of our gun crews.
                        </li>
                        <li>
                            A constant search for perfect accuracy done through extensive training 
                            of our spotters.
                        </li>
                        <li>
                            Our strategically-minded operations, often done in coordination with other 
                            regiments and our coalition: the CSU.
                        </li>
                        <li>
                            A willingness to take risks to achieve our goals, using our mobility and combat
                            experience to protect and keep the guns firing at all costs.
                        </li>
                    </ul>
                </p>
                <p>
                    We greatly believe in the training of our soldiers and we keep our hierarchy
                    fluid to allow anyone talented in anything to rise through the ranks, learn
                    skills on the way, and get to the position where they will be the most useful 
                    in the shortest amount of time. As we want to keep players playing, we try our best 
                    to keep the logistical cost of our operations down and we ask everyone to do a healthy
                    dose of logi to not burn themselves out.
                </p>
            </div>
        </div>
    )
};

export default homePage;