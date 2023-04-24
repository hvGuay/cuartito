import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function MultiActionAreaCard({ id, img, title, price, }) {
  return (
    <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          height="300"
          image={img}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            ${price}
          </Typography>
          
        </CardContent>

    </Card>
  );
}
