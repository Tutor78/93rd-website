import * as React from 'react';

function Feats() {
    const exploits =[
        {
            war: '100',
            title:'White Whale in Arcadia',
            image: 'url(../images/)',
            text: `The 93rd participated in the White Whale landing at Arcadia.
                    The landing was organized by the CSU and consisted of 11 regiments.
                    The landing was made up of an armada of around 35 ships of which 2 were
                    from the 93rd. There was a valiant effort by the guns to help break the defenders
                    during fierce combat which lasted over five hours.`
        },
        {
            war: '100',
            title:'White Whale in Arcadia',
            image: 'url(../images/)',
            text: `The 93rd participated in the White Whale landing at Arcadia.
                    The landing was organized by the CSU and consisted of 11 regiments.
                    The landing was made up of an armada of around 35 ships of which 2 were
                    from the 93rd. There was a valiant effort by the guns to help break the defenders
                    during fierce combat which lasted over five hours.`
        },
        {
            war: '100',
            title:'White Whale in Arcadia',
            image: 'url(../images/)',
            text: `The 93rd participated in the White Whale landing at Arcadia.
                    The landing was organized by the CSU and consisted of 11 regiments.
                    The landing was made up of an armada of around 35 ships of which 2 were
                    from the 93rd. There was a valiant effort by the guns to help break the defenders
                    during fierce combat which lasted over five hours.`
        }
    ]

    return (
        <div>
            {exploits.map(({ war, title, image, text }) => (
                <div>
                    <h1>War: {war}</h1>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
            ))} 
        </div>
    )
}

export default Feats;