import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  container: {
    display:'flex',
    
  },
  root: {
    minWidth: 275,
    width:'20%',
    marginLeft: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (

    
  
    <div className={classes.container}>
      <Card className={classes.root} variant="outlined">
       <CardContent>
        <Typography variant="h5" component="h2">
           Fresh.vegas
         </Typography>
         <Typography className={classes.pos} color="textSecondary">
           B12345643234
         </Typography>
         <Typography variant="body2" component="p">
           6780 South Las Vegas Blvd Las Vegas, Nevada, USA-89119
         </Typography>
       </CardContent>
       <CardActions>
         <Button size="small">UPDATE</Button>
         <Button size="small">DELETE</Button>
       </CardActions>
     </Card>

     <Card className={classes.root} variant="outlined">
       <CardContent>
        <Typography variant="h5" component="h2">
           Fresh.vegas
         </Typography>
         <Typography className={classes.pos} color="textSecondary">
           B12345643234
         </Typography>
         <Typography variant="body2" component="p">
           6780 South Las Vegas Blvd Las Vegas, Nevada, USA-89119
         </Typography>
       </CardContent>
       <CardActions>
         <Button size="small">UPDATE</Button>
         <Button size="small">DELETE</Button>
       </CardActions>
     </Card>
    </div>



  );
}
