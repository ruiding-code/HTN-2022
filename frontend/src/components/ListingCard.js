import React, { useEffect, useState } from "react";
import { Grid, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactCardFlip from 'react-card-flip';
import { likeButtonColor } from "../utils/constants";
import "../style/ListingCard.css"
import { CardMedia } from "@material-ui/core";
import Modal from 'react-modal';


export function ListingCard(props) {
  const [like, setLike] = useState(false);
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const inPerson = false;
  const online = true;
  const furnished = false;


  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const likeMechanism = () => {
    if(like){
      setLike(false)
    }else{
      setLike(true);
    }
  }

  useEffect(() => {

	}, []);

  return (
    <div>

    
        <div className="WholeCard" onClick={() => openModal()}>
        <Grid
            container
            direction="row"
            justifyContent="space-around"
        >
            <Grid
                item
            >
                <div className="Card">
                    <CardMedia
                        component="img"
                        height="300"
                        image={props.image}
                        alt={props.image}
                    />
                </div>
            </Grid>

            <Grid
                item
                textAlign="left"
                sx={{ p: 2 }}
            >
                <div className="address" >{props.address}</div>
                <div className="description" >{props.description}</div>
                <Grid>
                    <IconButton onClick={() => likeMechanism()}>
                        <ReactCardFlip isFlipped={like}>
                            <FavoriteBorderIcon sx={{ color: likeButtonColor}}/>
                            <FavoriteIcon sx={{ color: likeButtonColor}}/>
                        </ReactCardFlip>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
        </div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
        >
            <div style={{display: "flex", flexDirection: "row"}}>
                <div>
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
                    
                </div>

                <div>
                    <img style={{ width: 600}} src='https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg'/>
                    <p className='specification'>$1400/month</p>
                    <p className='specification'>Lease Length: 1,3,4,9, 12</p>
                    <p className='specification'>7 People interested</p>
                    <p className='specification'>Posted on: May 15 2022</p>
                </div>

            </div>
            {/* <Feedback hide={closeModal}></Feedback> */}
        </Modal>
    </div>
  );
}