import  React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const GameCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345,':hover': {
      boxShadow: '3px 20px 20px 1px rgb(0,0,0,0.2)',
      cursor:'pointer' 
    }, }} onClick={props.onClick}>
      <CardMedia
        component="img"
        height="140"
        image={props.src}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.game}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {props.discrption}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={props.onClick}>Play</Button>
      </CardActions>
    </Card>
  )
}

export default GameCard