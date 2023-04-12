import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ProductCard = ({ product }) => {

  return (
        <Card sx={{ maxWidth: 250 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="250"
              image= {product.img}
              alt="producto"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
    }


export default ProductCard