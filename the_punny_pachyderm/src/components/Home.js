//react and material ui imports
import React from "react";
import Card from "./CustomCard"
import Grid from "@material-ui/core/Grid";

// image imports NEED TO MAKE THESE AS PLACEHOLDERS SO CHUNI CAN JUST UPLOAD
import bagimg from "../img/tote.jpg"
import stickerimg from "../img/sticker.jpg"
import doormatimg from "../img/doormat.jpg"
//create landing page for item categories 
//link this to /items/category

function Home() {
    return (
        <div className="home-div">
            <h1>Home Page</h1>
            <Grid container spacing={5} align="center">
                <Grid item sm={6}>
                    <Card img={bagimg} title="Tote Bags" description="Product Description Product Description Product Description Product Description Product Description Product Description"/>
                </Grid>
                <Grid item sm={6}>
                    <Card img={stickerimg} title="Stickers" description="Product Description Product Description Product Description Product Description Product Description Product Description"/>
                </Grid>
                <Grid item sm={6}>
                    <Card img={doormatimg} title="Door Mats" description="Product Description Product Description Product Description Product Description Product Description Product Description"/>
                </Grid>
                
            </Grid>
        
        </div>
    )
}
export default Home