import * as React from 'react';
import {Card, CardContent, CardMedia, Typography } from '@mui/material';

function Feats() {
    const exploits =[
        {
            title:'White Whale in Arcadia',
            image: require('./images/ww-arcadia/salute.jpg'),
            text: `The 93rd participated in the White Whale landing at Arcadia.
                    The landing was organized by the CSU and consisted of 11 regiments.
                    The landing was made up of an armada of around 35 ships of which 2 were
                    from the 93rd. There was a valiant effort by the guns to help break the defenders
                    during fierce combat which lasted over five hours.`
        },
        {
            title:'White Whale in Arcadia',
            image: require('./images/ww-arcadia/shelling-one.jpg'),
            text: `The 93rd participated in the White Whale landing at Arcadia.
                    The landing was organized by the CSU and consisted of 11 regiments.
                    The landing was made up of an armada of around 35 ships of which 2 were
                    from the 93rd. There was a valiant effort by the guns to help break the defenders
                    during fierce combat which lasted over five hours.`
        },        
        {
            title:'White Whale in Arcadia',
            image: require('./images/ww-arcadia/shelling-two.jpg'),
            text: `The 93rd participated in the White Whale landing at Arcadia.
                    The landing was organized by the CSU and consisted of 11 regiments.
                    The landing was made up of an armada of around 35 ships of which 2 were
                    from the 93rd. There was a valiant effort by the guns to help break the defenders
                    during fierce combat which lasted over five hours.`
        },
        {
            title:'White Whale in Arcadia',
            image: require('./images/ww-arcadia/shelling-night.jpg'),
            text: `The 93rd participated in the White Whale landing at Arcadia.
                    The landing was organized by the CSU and consisted of 11 regiments.
                    The landing was made up of an armada of around 35 ships of which 2 were
                    from the 93rd. There was a valiant effort by the guns to help break the defenders
                    during fierce combat which lasted over five hours.`
        },
    ]

    return (
        <div style={{alignSelf: 'center'}}>
            {exploits.map(({ title, image, text }) => (
                <Card sx={{ maxWidth: 345, margin: 5 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={image}
                        alt={title}
                    />
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