import Card from '@material-ui/core/Card'

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import {Link} from "react-router-dom"

const useStyles = makeStyles({
  root: {
    maxWidth: "500px",
    maxHeight: "500px"
  }, 
  media: {
    height: "350px"
  }
});

function CustomCard(props) {
  const classes = useStyles();

    function handleClick() {
        console.log("i got clicked");
    }

  return (
      <Card className={classes.root}>
        <CardActionArea onClick={handleClick} component={Link} to="/shop">
          <CardMedia
            className={classes.media}
            image={props.img}
            title="tote bag"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
  );
}


export default CustomCard