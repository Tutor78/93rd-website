import * as React from 'react';
import {Card, CardContent, Typography } from '@mui/material';

import FeatSlider from '../Slider';

function Feats() {
    const exploits =[
        {
            title:'White Whale in Arcadia',
            images: [
                require('./images/ww-arcadia/salute.jpg'),
                require('./images/ww-arcadia/shelling-one.jpg'),
                require('./images/ww-arcadia/shelling-two.jpg'),
                require('./images/ww-arcadia/shelling-night.jpg')
            ],
            text: `The 93rd participated in the White Whale landing at Arcadia.
                    The landing was organized by the CSU and consisted of 11 regiments.
                    The landing was made up of an armada of around 35 ships of which 2 were
                    from the 93rd. There was a valiant effort by the guns to help break the defenders
                    during fierce combat which lasted over five hours.`
        }
    ]

    return (
        <div style={{alignSelf: 'center'}}>
            {exploits.map(({ title, images, text }) => (
                <Card sx={{ maxWidth: 345, margin: "auto" }}>
                    <FeatSlider images={images}/>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {text}
                        </Typography>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}

export default Feats;