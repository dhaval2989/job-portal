import React from "react";
import { Typography, Grid } from "@material-ui/core";
import useStyles from "./styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
function PersonalDetails(props) {
  const { formValues } = props;
  const classes = useStyles();
  const { fullName } = formValues;

  return (
    <Grid item xs={12} sm={12}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="spanning table">
          <TableBody>
            <Typography variant="h6" gutterBottom className={classes.title}>
              Career Details
            </Typography>
            <TableRow>
              <TableCell colSpan={2}>Full Name </TableCell>
              <TableCell
                align="right"
                className={classes.data}
              >{`${fullName}`}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default PersonalDetails;
