import React, { useEffect, useState } from "react";
import { Grid, IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ReactCardFlip from 'react-card-flip';
import { likeButtonColor } from "../utils/constants";
import "../style/ListingCard.css"
import { CardMedia } from "@material-ui/core";

export function ListingCard(props) {
  const [like, setLike] = useState(false);

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
    <div className="WholeCard" >
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
                    image={"https://images-assets.nasa.gov/image/PIA12235/PIA12235~thumb.jpg"}
                    alt={"Hi"}
                />
            </div>
        </Grid>

        <Grid
            item
            textAlign="left"
            sx={{ p: 2 }}
        >
            <div className="address" >Address</div>
            <div className="author">Posted by First Last</div>
            <div className="description" >Short term leases allowed. 2 streets down from McGill Univeristy, 4 min from metro station, beautiful 2 bedrooms apartement with 1 bathroom... </div>
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
  );
}