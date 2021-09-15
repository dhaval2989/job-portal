import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';
import useStyles from './styles';



function ProductDetails() {
  const classes = useStyles();
  return (
    <List disablePadding>
      <ListItem className={classes.listItem}>
        <ListItemText primary="Print" />
        {/* <Typography variant="subtitle1" className={classes.total}>
        Student Name 
        </Typography> */}
      </ListItem>
    </List>
  );
}

export default ProductDetails;
