import {
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
  CardHeader,
  Avatar,
  IconButton,
} from "@material-ui/core";
import Card from "@mui/material/Card/Card";
import { Product } from "../../app/models/Product";
import { Box, ThemeProvider, createTheme } from "@mui/system";

interface Props {
  product: Product;
}
export default function ProductCard({ product }: Props) {
  return (
    <Card>
      <CardHeader
        avatar={
          <Avatar style={{ backgroundColor: "purple" }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        // sx={{ fontWeight: "bold", color: "primary.main" }}
        style={{ fontWeight: "bold", color: "#1919FF" }}
      />
      <CardMedia
        component="img"
        alt={product.name}
        height="140"
        style={{
          height: 140,
          backgroundSize: "contain",
          // backgroundColor: "#87ceeb",
        }}
        image={product.pictureURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" color="secondary">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2">
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
        <Button size="small">View</Button>
      </CardActions>
    </Card>
  );
}
