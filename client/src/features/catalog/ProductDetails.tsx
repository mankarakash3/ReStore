import {
  ButtonBase,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../app/models/Product";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export default function ProductDetails() {
  const classes = useStyles();
  const { id } = useParams<{ id: string }>();
  const [product, setproduct] = useState<Product | null>(null);

  useEffect(() => {
    axios
      .get(`https://localhost:5001/api/Products/${id}`)
      .then((response) => setproduct(response.data));
  }, []);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img
                className={classes.img}
                alt={product?.name}
                src={product?.pictureURL}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  {product?.name}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {product?.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product?.type}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product?.brand}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: "pointer" }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
                $
                {(product?.price === null || product?.price === undefined
                  ? 0
                  : product.price / 100
                ).toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
