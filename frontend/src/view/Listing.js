import React, { useEffect, useState } from "react";
import '../style/Listing.css';
import { Grid } from "@mui/material";


export function Listing() {
    const inPerson = false;
    const online = true;
    const furnished = false;

    return (
        <div className="App">
            <header className="App-header">
            <Grid
                container
                direction="row"
                justifyContent="space-around"
            >
                <Grid 
                    item
                >
                    <img style={{ width: 1000}}  src='https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg' />
                    <p className='description'>Short term leases allowed. 2 streets down from McGill Univeristy, 4 min from metro station, beautiful 2 bedrooms apartement with 1 bathroom. </p>
                    {inPerson ? 
                        <p className='specification'>In person Viewing Available</p>
                        :
                        <p className='specification'>In person Viewing Unavailable</p>
                    }

                    {online ? 
                        <p className='specification'>Online Viewing Available</p>
                        :
                        <p className='specification'>Online Viewing Unavailable</p>
                    }

                    {furnished ? 
                        <p className='specification'>Online Viewing Available</p>
                        :
                        <p className='specification'>Online Viewing Unavailable</p>
                    }
                    
                </Grid>

                <Grid 
                    item
                >
                    <img style={{ width: 700}} src='https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg'/>
                    <p className='specification'>$1400/month</p>
                    <p className='specification'>Lease Length: 1,3,4,9, 12</p>
                    <p className='specification'>7 People interested</p>
                    <p className='specification'>Posted on: May 15 2022</p>
                    <p className='specification'>Posted by" Meg Chang</p>
                </Grid>

            </Grid>
            </header>
        </div>
    );
}